'use strict';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'overview',
  waitOn: function () { return Meteor.subscribe('indexMarks')},
  data: function () { return {records: MarksList.find().fetch()} }
});

// Router.route('/marks/archive', function() {
//   var marks = MarksList.find({createdBy: Meteor.userId(), archived: true}, {sort :{date: -1}});
//   this.render('list', { data: { records: marks } } );
//   }, {
//     name: 'archive'
//   }
// );

// Router.route('/marks/:_id', function () {
//   var mark = MarksList.findOne({_id: this.params._id});

//   if ((Meteor.userId() === mark.createdBy) ||
//       ((typeof(mark.private) !== "undefined") && (mark.private === false))) {
//     this.render('single', {data: mark});
//   }
// });

// Router.route('/marks/tags/:slug', function() {
//   var marks = MarksList.find({ 'tags.slug': this.params.slug }, {sort :{date: -1}});

//   this.render('list', { data: {records: marks } } );
// }, {
//   name: 'marks.tags'
// } )
