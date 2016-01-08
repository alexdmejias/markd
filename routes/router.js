'use strict';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'overview',
  template: function() {
    var template;
    if (!Meteor.userId()) {
      template = '404'
    } else {
      template = 'overview'
    }

    return template
  }
});

Router.route('/marks/archive', {
  name: 'archive',
  template: 'archive'
});

Router.route('/marks/:_id', {
  name: 'singleMark',
  template: 'singleMark',
});

Router.route('/tags', {
  name: 'tags',
  template: 'tags',
  data: function () { return {records: TagsList.find().fetch()}}
});
