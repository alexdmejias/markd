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
    console.log(e);
    var name = $(e.target).parent().prev().val();
    console.log(name);
    
  }
});