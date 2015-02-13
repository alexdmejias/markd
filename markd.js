var MarksList = new Mongo.Collection('marks');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.list.helpers({
    list: function () {
      var author = Meteor.userId();
      return MarksList.find({}, {sort :{createdBy: author}})
    }
  });

  Template.input.events({
    'submit form': function(event) {
      var inputValue = event.target.mainInput.value;
      MarksList.insert({
        text: inputValue,
        date: new Date(),
        createdBy: Meteor.userId()
      })
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
