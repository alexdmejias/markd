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
				title: '',
				archived: false,
				private: true,
				tags: [],
				updatedOn: new Date(),
				createdOn: new Date(),
				createdBy: Meteor.userId(),
			};
			MarksList.insert(toInsert);
		}
	}
});

Template.input.helpers({
});

Template.input.onRendered(function() {
	$('.ui.dropdown').dropdown({allowAdditions: true });
})
