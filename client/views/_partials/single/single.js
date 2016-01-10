Template.single.helpers({
	editing: function() {
		return Session.equals('editing', this._id);
	}

});
Template.single.events({
	'click .edit': function(event, template) {
		var currentVal = Session.get('editing');
		if (currentVal !== null) {
			Session.set('editing', null);
		}

		if (currentVal === this._id) {
			var inputValue = template.find('#editField-' + this._id).value;
			var titleValue = template.find('#editTitleField-' + this._id).value;

			var isLink = (inputValue.substr(0,4) === 'http');
			Marks.update(this._id, {$set: {text: inputValue, link: isLink, title: titleValue}});
		} else {
			Session.set('editing', this._id);
		}
	},
	'click .remove': function() {
		Marks.remove(this._id);
	},

	'click .archive': function() {
    var status = this.archived || false;
		Marks.update(this._id, {$set: {archived: !status}});
	}

});
