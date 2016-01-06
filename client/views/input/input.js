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
	'tags': function() {
		var validTags = _.filter( _.sortBy( _.flatten( _.pluck(MarksList.find().fetch(), 'tags'), 'name' ) ).reverse() , 'name');
		var newTags = [];
		_.forEach(validTags, function(tag, index) {
			var filtered = _.find(newTags, {'name': tag.name});
			if (filtered) {
				var filteredIndex = _.findIndex(newTags, {name: tag.name});
				newTags[filteredIndex].count += 1;
			} else {
				tag.count = 1;
				newTags.push(tag);
			}
		});

		return newTags;
	}
});


Template.input.onRendered(function() {
	$('.ui.dropdown').dropdown({allowAdditions: true });
})
