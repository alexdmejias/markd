Template.singleMark.onCreated(function() {
  var template = this;

  template.autorun(function() {
    template.subscribe('singleMark', Router.current().params._id);
  })
});
