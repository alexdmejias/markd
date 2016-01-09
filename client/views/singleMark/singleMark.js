Template.singleMark.onCreated(function() {
  var template = this;

  template.autorun(function() {
    template.subscribe('singleMark', FlowRouter.getParams('_id'));
  })
});

Template.singleMark.helpers({
  'mark': function() {
    return MarksList.find().fetch();
  }
});
