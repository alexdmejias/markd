Template.tagsList.helpers({
  'tagHierchy': function(tag) {
    var hierchy = [tag.slug];

    if (tag.parent) {
      var parent = Tags.findOne(tag.parent);
      hierchy.unshift(parent.slug);
      if(parent.parent) {
        var grandParent = Tags.findOne(parent.parent);
        hierchy.unshift(grandParent.slug);
      }
    }

    return hierchy;
  }
});