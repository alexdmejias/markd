Template.list.helpers({
	tags: function() {
		var validTags = _.filter(_.flatten(_.pluck(MarksList.find().fetch(), 'tags')));
		return _.uniq(validTags,function(item){return JSON.stringify(item);});
	}
});
