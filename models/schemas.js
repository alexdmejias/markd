MarksList.attachSchema(new SimpleSchema({
  text: {
    type: String,
    optional: true
  },

  updatedOn: {
    type: Date,
    optional: true
  },
  
  createdOn: {
    type: Date,
    optional: true
  },

  createdBy: {
    type: String,
    optional: true
  },

  title: {
    type: String,
    optional: true
  },

  archived: {
    type: Boolean,
    optional: true
  },

  private: {
    type: Boolean,
    optional: true
  },

  tags: {
    type: [Object],
    optional: true
  }

}));

TagsList.attachSchema(new SimpleSchema({
  name: {
    type: String,
    optional: true
  },

  slug: {
    type: Date,
    optional: true
  },

  user: {
    type: String,
    optional: true
  }

}));
