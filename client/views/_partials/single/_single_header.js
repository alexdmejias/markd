Template.single_header.helpers({
	displayDate: function() {
		return moment(this.updatedOn).format('MM/DD/YYYY, h:mm a');
	},
	isArchived: function() {
		return this.archived;
	},
  title: function() {
    return this.title ? this.title : '[Untitled]';
  },
	editingStatus: function() {
		var label = '';
		if (Session.equals('editing', this._id)) {
			label = 'save';
		} else {
			label = 'edit';
		}
		return label;
	}
});
