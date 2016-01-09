'use strict';

Router.route('/', {
  name: 'overview',
  template: 'overview'
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
  template: 'tags'
});
