Template.tagsList.helpers({});

Template.tagsList.onCreated(function() {
	var template = this;

	template.autorun(function() {
		template.subscribe('tagsList');
	});
});
