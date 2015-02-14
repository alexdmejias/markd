MarksList = new Mongo.Collection('marks');

if (Meteor.isClient) {
  // counter starts at 0
  Session.set('editing', null);

  Template.list.helpers({
    list: function () {
      var author = Meteor.userId();
      return MarksList.find({createdBy: author}, {sort :{date: -1}})
    },
    editing: function() {
      return Session.equals('editing', this._id);
    },
    editingStatus: function() {
      var label = '';
      if (Session.equals('editing', this._id)) {
        label = 'save';
      } else {
        label = 'edit';
      }
      return label;
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
    'click .edit': function(event, template) {
      var currentVal = Session.get('editing');
      if (currentVal !== null) {
        Session.set('editing', null);
      }

      if (currentVal === this._id) {
        var inputValue = template.find('#editField-' + this._id).value;
        var isLink = (inputValue.substr(0,4) === 'http') ? true : false;
        MarksList.update(this._id, {$set: {text: inputValue, link: isLink}});
      } else {
        Session.set('editing', this._id);
      }
    },
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
