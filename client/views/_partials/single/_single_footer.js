Template.single_footer.helpers({
  editingTags: function () {
    return Session.equals('editingTags', this._id);
  }
});
Template.single_footer.events({
  
});
