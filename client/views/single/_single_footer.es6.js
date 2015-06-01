Template.single_footer.helpers({
  editingTags: function () {
    return Session.equals('editingTags', this._id);
  }
});
Template.single_footer.events({
  'click .__tags_add': function (e) {
    $(e.target).parent().next().addClass('adding');
  },

  'click .__tags_save': function(e) {
    var input = $(e.currentTarget).prev(),
      value = input.val();

    var currTags = MarksList.findOne({_id: this._id}).tags;

    if (value !== '') {
      var tags = value.split(',');
      _.each(tags, (tag) => {
        if (tag) {
          var insert = {
            color: '',
            slug: slugify(tag),
            name: tag
          };
          if (_.filter(currTags, {'name': insert.name, 'slug': insert.slug}).length === 0) {
            MarksList.update(this._id, {$push: {tags: insert}});
          } else {
            sAlert.error(`This Mark already has the '${insert.name}' tag.`);
          }
        }
      });
      input.val('').focus();
    }
  },

  'click .__tags_delete': function(e, template) {
    e.preventDefault();
    var tags = MarksList.findOne({_id: template.data._id}).tags;
    var newTags = _.reject(tags, {'slug': this.slug, 'name': this.name});
    MarksList.update(template.data._id, {$set: {tags: newTags}});
  }
});
