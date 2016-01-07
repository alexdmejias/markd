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
  waitOn: function () { return Meteor.subscribe('indexMarks')},
  data: function () { return {records: MarksList.find().fetch()} }
});

Router.route('/marks/archive', {
  name: 'archive',
  template: 'list',
  waitOn: function () { return Meteor.subscribe('archievedMarks')},
  data: function () { return {records: MarksList.find().fetch()} }
});

Router.route('/marks/:_id', {
  name: 'singleMark',
  template: 'list',
  waitOn: function () { return Meteor.subscribe('singleMark', this.params._id)},
  data: function () { return {records: MarksList.find().fetch()} }
});

//
// Router.route('/marks/tags/:slug', function() {
//   var marks = MarksList.find({ 'tags.slug': this.params.slug }, {sort :{date: -1}});
//
//   this.render('list', { data: {records: marks } } );
// }, {
//   name: 'marks.tags'
// } )
