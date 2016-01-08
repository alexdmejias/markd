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
  },
  data: function () { return {records: MarksList.find().fetch()} }
});

Router.route('/marks/archive', {
  name: 'archive',
  template: 'archive',
  data: function () { return {records: MarksList.find().fetch()} }
});

Router.route('/marks/:_id', {
  name: 'singleMark',
  template: 'singleMark',
  data: function () { return {records: MarksList.find().fetch()} }
});

Router.route('/tags', {
  name: 'tags',
  template: 'tags',
  data: function () { return {records: TagsList.find().fetch()}}
});

//
// Router.route('/marks/tags/:slug', function() {
//   var marks = MarksList.find({ 'tags.slug': this.params.slug }, {sort :{date: -1}});
//
//   this.render('list', { data: {records: marks } } );
// }, {
//   name: 'marks.tags'
// } )
