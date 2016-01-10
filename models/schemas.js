Marks.attachSchema(new SimpleSchema({
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
    type: [Tags],
    optional: true
  }

}));

Tags.attachSchema(new SimpleSchema({
  name: {
    type: String
  },

  slug: {
    type: String
  },

  user: {
    type: String
  },

  color: {
    type: String
  },

  parent: {
    type: String,
    optional: true
  }

}));
