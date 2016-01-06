Meteor.publish('indexMarks', function() {
  return MarksList.find({createdBy: this.userId, archived: false}, {sort :{date: -1}});
});

Meteor.publish('archievedMarks', function() {
  return MarksList.find({createdBy: this.userId, archived: true}, {sort :{date: -1}});
});

Meteor.publish('singleMark', function(id) {
  return MarksList.find({createdBy: this.userId, _id: id});
});
