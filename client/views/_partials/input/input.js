Template.input.events({
	'submit .mainInputForm': function(event) {
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
			MarksList.insert(toInsert, function(err, id) {
				if (err) {
					sAlert.error('Something went wrong please try again');
				} else {

					sAlert.success(`Successfully created new Mark. <a href=\"/marks/${id}\">View it</a>`, {html: true});
					input.value = '';
					title.value = '';
					$('.ui.checkbox').checkbox('check');
				}
			});
		}
	}
});

Template.input.helpers({
});

Template.input.onRendered(function() {
	$('.ui.accordion').accordion('close', 0);

	if (Router.current().route.getName() === 'overview') {
		$('.ui.accordion').accordion('open', 0);
	}

	$('.ui.checkbox').checkbox();

	$('.ui.dropdown').dropdown({
    allowAdditions: true
  });

})
