'use strict';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
  var marks = MarksList.find({createdBy: Meteor.userId(), archived: false}, {sort :{date: -1}});
  this.render('overview', { data: { records: marks } });
}, {
  name: 'overview'
});

Router.route('/marks/archive', function() {
  var marks = MarksList.find({createdBy: Meteor.userId(), archived: true}, {sort :{date: -1}});
  this.render('list', { data: { records: marks } } );
  }, {
    name: 'archive'
  }
);

Router.route('/marks/:_id', function () {
  var mark = MarksList.findOne({_id: this.params._id});

  if ((Meteor.userId() === mark.createdBy) ||
      ((typeof(mark.private) !== "undefined") && (mark.private === false))) {
    this.render('single', {data: mark});
  }
});
