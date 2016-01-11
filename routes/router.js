'use strict';

FlowRouter.route('/', {
  name: 'overview',
  action: function() {
    BlazeLayout.render("layout", {main: 'overview'});
  }
});

FlowRouter.route('/marks/archive', {
  name: 'archive',
  action: function() {
    BlazeLayout.render('layout', {main: 'archive'});
  }
});

FlowRouter.route('/marks/:_id', {
  name: 'singleMark',
  action: function() {
    BlazeLayout.render('layout', {main: 'singleMark'});
  }
});

FlowRouter.route('/tags', {
  name: 'tags',
  action: function() {
    BlazeLayout.render('layout', {main: 'tags'});
  }
});
