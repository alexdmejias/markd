Template.header.helpers({});

Template.header.events({
  'click .__create': function() {
    $('.ui.accordion').accordion('open', 0);
  }
})
