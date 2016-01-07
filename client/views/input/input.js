Template.input.events({
	'submit form': function(event) {
		event.preventDefault();
		var input = event.target.mainInput || '',
			title = event.target.titleInput || '';

		if (!title && !input) {
			console.log('cant submit empty mark');
		} else {
			var toInsert = {
				text: input.value,
				title: title.value,
				archived: false,
				private: $('.ui.checkbox').checkbox('is checked'),
				tags: [],
				updatedOn: new Date(),
				createdOn: new Date(),
				createdBy: Meteor.userId(),
			};
			MarksList.insert(toInsert);

			input.value = '';
			title.value = '';
			$('.ui.checkbox').checkbox('check');
		}
	}
});

Template.input.helpers({
});

Template.input.onRendered(function() {
	$('.ui.checkbox').checkbox();
})
