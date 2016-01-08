Template.single_header.helpers({
	displayDate: function() {
		return moment(this.updatedOn).format('MM/DD/YYYY, h:mm a');
	},
	inSingle: function() {
		return (Router.current().route.getName() !== 'overview');
	},
	isArchived: function() {
		return this.archived;
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
