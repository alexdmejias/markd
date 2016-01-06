Meteor.publish('indexMarks', function() {
  // return MarksList.find({createdBy: this.userId, archived: false}, {sort :{date: -1}});
  var user = this.userId; 
  return MarksList.find({
    createdBy: this.userId, 
    archived: false
  }, {
    sort :{
      date: -1
    }
  });
});
