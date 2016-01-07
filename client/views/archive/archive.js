Template.archive.onCreated(function() {
	var template = this;

	template.autorun(function() {
		template.subscribe('archievedMarks');
	})
});
