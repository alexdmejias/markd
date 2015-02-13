MarksList = new Mongo.Collection('marks');

if (Meteor.isClient) {
  // counter starts at 0
  Session.set('editing', null);

  Template.list.helpers({
    list: function () {
      var author = Meteor.userId();
      return MarksList.find({createdBy: author}, {sort :{date: -1}})
    }
  });

  Template.input.events({
    'submit form': function(event) {
      var inputValue = event.target.mainInput.value;
      var isLink = (inputValue.substr(0,4) === 'http') ? true : false;
      MarksList.insert({
        text: inputValue,
        date: new Date(),
        createdBy: Meteor.userId(),
        link: isLink
      })
    }
  });

  Template.list.events({
    // 'click .edit': function() {
    //   this.link = false;
    //   console.log(this)
    //
    // },
    'click .remove': function() {
      MarksList.remove(this._id);
    }

  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
