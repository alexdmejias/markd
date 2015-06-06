Template.list.helpers({
	'tags': function() {
		var validTags = _.filter( _.sortBy( _.flatten( _.pluck(MarksList.find().fetch(), 'tags'), 'name' ) ).reverse() , 'name');
		var newTags = [];
		_.forEach(validTags, (tag, index) => {
			let filtered = _.find(newTags, {'name': tag.name});
			if (filtered) {
				let filteredIndex = _.findIndex(newTags, {name: tag.name});
				newTags[filteredIndex].count += 1;
			} else {
				tag.count = 1;
				newTags.push(tag);
			}
		});

		return newTags;
	}
});
