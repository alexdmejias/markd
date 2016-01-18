Template.tags.helpers({
	'tags': function () {
		return Tags.find({}, {sort: {'name': 1}}).fetch();
	}
});

Template.tags.onCreated(function() {
	var template = this;

	template.autorun(function() {
		template.subscribe('tagsList');
	});
});
