Template.tags.helpers({
	'tags': function () {
		return TagsList.find().fetch();
	}
});

Template.tags.onCreated(function() {
	var template = this;

	template.autorun(function() {
		template.subscribe('tagsList');
	});
});
