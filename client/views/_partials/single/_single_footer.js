Template.single_footer.helpers({
  'tagsObj': function() {
    var self = this;
    var tags = [];

    if (!self.tags || _.isEmpty(self.tags)) return false;

    Tags.find({'_id': {$in: self.tags}}).forEach(function(doc) {
      tags.push(doc)
    });

    return tags;
  }
});
Template.single_footer.events({

});
