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
				tags: $('.mainInputForm').find('.__tags').dropdown('get value').split(','),
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
	'tags': function() {
		return Tags.find().fetch();
	}
});

Template.input.onRendered(function() {
	var $mainInputForm = $('.mainInputForm'),
		$inputAccordion = $('.ui.accordion');

	$inputAccordion.accordion();

	$mainInputForm.find('.ui.checkbox').checkbox();

	$mainInputForm.find('.ui.dropdown').dropdown({
    allowAdditions: true
  });

});
