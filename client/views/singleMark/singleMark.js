Template.singleMark.onCreated(function() {
  var template = this;

  template.autorun(function() {
    template.subscribe('singleMark', this.params._id);
  })
});
