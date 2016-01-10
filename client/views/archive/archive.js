Template.archive.helpers({
	'marks': function() {
	  return MarksList.find().fetch();
	}
});

Template.archive.onCreated(function() {
	var template = this;

	template.autorun(function() {
		template.subscribe('archievedMarks');
	})
});
