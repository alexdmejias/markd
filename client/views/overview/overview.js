Template.overview.helpers({
	'marks': function() {
		return MarksList.find({archived: false}).fetch();
	}
});

Template.overview.onCreated(function() {
	var template = this;

	template.autorun(function() {
		template.subscribe('indexMarks');
	});
});
