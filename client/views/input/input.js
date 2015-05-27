Template.input.events({
	'submit form': function(event) {
		event.preventDefault();
		var input = event.target.mainInput;
		var inputValue = input.value;
		var isLink = (inputValue.substr(0,4) === 'http');
		MarksList.insert({
			text: inputValue,
			date: new Date(),
			createdBy: Meteor.userId(),
			link: isLink,
			title: null,
			archived: false,
			private: true,
			tags: []
		})
		input.value = '';
	}
});
