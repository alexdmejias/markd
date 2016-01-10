Meteor.publish('indexMarks', function() {
  return Marks.find({createdBy: this.userId, archived: false}, {sort :{createdOn: -1}});
});

Meteor.publish('archievedMarks', function() {
  return Marks.find({createdBy: this.userId, archived: true}, {sort :{createdOn: -1}});
});

Meteor.publish('singleMark', function(id) {
  return Marks.find({createdBy: this.userId, _id: id});
});

Meteor.publish('tagsList', function(id) {
  return Tags.find({user: this.userId}, {sort:{name: 1}});
})
