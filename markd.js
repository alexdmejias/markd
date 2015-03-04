MarksList = new Mongo.Collection('marks');

if (Meteor.isClient) {
  Session.set('editing', null);

  Template.list.helpers({
  });

  Template.single.helpers({
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
    },
    displayDate: function() {
      return moment(this.date).format('MM/DD/YYYY, HH:MM');
    },
    inSingle: function() {
      return (Router.current().route.getName() === 'overview') ? false : true;
    },
    isArchived: function() {
      return this.archived;
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
        link: isLink,
        title: null,
        archived: false,
        private: true,
        tags: []
      })
    }
  });

  Template.single.events({
    'click .edit': function(event, template) {
      var currentVal = Session.get('editing');
      if (currentVal !== null) {
        Session.set('editing', null);
      }

      if (currentVal === this._id) {
        var inputValue = template.find('#editField-' + this._id).value;
        var titleValue = template.find('#editTitleField-' + this._id).value;

        var isLink = (inputValue.substr(0,4) === 'http') ? true : false;
        MarksList.update(this._id, {$set: {text: inputValue, link: isLink, title: titleValue}});
      } else {
        Session.set('editing', this._id);
      }
    },
    'click .remove': function() {
      MarksList.remove(this._id);
    },

    'click ._tags': function(event) {
      console.log(event);
    },

    'click .archive': function() {
      var status = this.archived || false;
      MarksList.update(this._id, {$set: {archived: !status}});
    },

    'blur ._tags': function(event) {
      console.log('blurred the field', event);
      var inputVal = event.target.tags.value;

      var tags = inputVal.split(',');


    }

    // 'click ._j_archive': function() {
    //   var archivedValue = true
    //   MarksList.update(this._id, {$set: {archived: }});
    // }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
