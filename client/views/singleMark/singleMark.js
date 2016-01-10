Template.singleMark.helpers({
  'marks': function() {
    return MarksList.find().fetch();
  }
});

Template.singleMark.onCreated(function() {
  var template = this;

  template.autorun(function() {
    template.subscribe('singleMark', FlowRouter.getParam('_id'));
  })
});

Template.singleMark.helpers({
  'marks': function() {
    return MarksList.find().fetch();
  }
});
