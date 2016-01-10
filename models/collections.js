MarksList = new Mongo.Collection('marks');

MarksList.allow({
  insert: function () {
    // the user must be logged in, and the document must be owned by the user
    return true;
  },
  update: function () {
    // can only change your own documents
    return true;
  },
  remove: function (userId, doc) {
   return true;
  }
});

Tags = new Mongo.Collection('tags');

Tags.allow({
  insert: function () {
    // the user must be logged in, and the document must be owned by the user
    return true;
  },
  update: function () {
    // can only change your own documents
    return true;
  },
  remove: function (userId, doc) {
   return true;
  }
});
