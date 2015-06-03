Template.input.events({
	'submit form': function(event) {
		event.preventDefault();
		var input = event.target.mainInput,
			title = event.target.titleInput;

		var inputValue = input.value;
		var toInsert = {
			text: inputValue,
			date: new Date(),
			createdBy: Meteor.userId(),
			title: null,
			archived: false,
			private: true,
			tags: []
		};

		if (title.value !== '') {
			toInsert.title = title.value;
		}

		if (input !== '') {
			MarksList.insert(toInsert);
			input.value = '';
			title.value = '';
		} else {
			// todo: show error messages
		}

	}
});
