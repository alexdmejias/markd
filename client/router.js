'use strict';

Router.configure({
  layoutTemplate: 'layout'
})

Router.route('/', function() {
  var marks = MarksList.find();
  // this.layout('layout');
  this.render('overview', {data: {marks: marks}});
}, {
  name: 'overview'
});

Router.route('/marks/:_id', function () {
  var mark = MarksList.findOne({_id: this.params._id});

  if ((Meteor.userId() === mark.createdBy)) {
    this.render('single', {data: mark});
  }
});
