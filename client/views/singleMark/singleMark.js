Template.singleMark.helpers({
  'marks': function() {
    return Marks.find().fetch();
  }
});

Template.singleMark.onCreated(function() {
  var template = this;

  template.autorun(function() {
    template.subscribe('singleMark', FlowRouter.getParam('_id'));
  })
});

Template.singleMark.onRendered(function() {
  $inputAccordion = $('.ui.accordion');

  $inputAccordion.accordion('close', 0);
});
