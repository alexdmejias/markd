Template.overview.helpers({});

Template.overview.onCreated(function() {
	var template = this;

	template.autorun(function() {
		template.subscribe('indexMarks');
	})
});
