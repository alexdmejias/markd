MarksList = new Mongo.Collection('marks');

if (Meteor.isClient) {
  Session.set('editing', null);
  Session.set('editingTags', null);

  Meteor.startup(function () {
    $(document).on('keydown', function (e) {
      if(e.keyCode === 13 && e.metaKey) {
        var $mainInputForm = $('.mainInputForm');
        if ($mainInputForm.length && $mainInputForm.find('textarea').val()) {
          $mainInputForm.submit();
        }
    	}
    });
  });

  Template.list.helpers({
  });

  Template.single_header.helpers({
    displayDate: function() {
      return moment(this.date).format('MM/DD/YYYY, HH:MM');
    },
    inSingle: function() {
      return (Router.current().route.getName() !== 'overview');
    },
    isArchived: function() {
      return this.archived;
    },
    editingTags: function() {
      return Session.equals('editingTags', this._id);
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

  Template.single.helpers({
    editing: function() {
      return Session.equals('editing', this._id);
    },

  });

  Template.input.events({
    'submit form': function(event) {
      var inputValue = event.target.mainInput.value;
      var isLink = (inputValue.substr(0,4) === 'http');
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

        var isLink = (inputValue.substr(0,4) === 'http');
        MarksList.update(this._id, {$set: {text: inputValue, link: isLink, title: titleValue}});
      } else {
        Session.set('editing', this._id);
      }
    },
    'click .remove': function() {
      MarksList.remove(this._id);
    },

    //'click ._tags': function(event) {
    //  console.log(event);
      //Session.set('editingTitle', this._id);
    //},

    'click .archive': function() {
      var status = this.archived || false;
      MarksList.update(this._id, {$set: {archived: !status}});
    },

    'click .tag': function() {
      Session.set('editingTags', this._id);
    },

    'blur .tags_field': function(event) {
      var tags = event.target.value.split(',');

      //var currentTags = this.tags;
      var newTags = [];
      if (tags.length > 0) {
        $.each(tags, function(index, tag) {
          tag = $.trim(tag);
          if ((tag.length) && (typeof tag === "string")) {
            newTags.push(tag);
          }
        });
      }
      MarksList.update(this._id, {$set: {tags: newTags}});
    },
    'click .showModal': function() {
      console.log('wasd');
      $('.ui.modal').modal('show');
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
