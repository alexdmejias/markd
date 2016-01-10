Template.archive.helpers({
	'marks': function() {
	  return Marks.find().fetch();
	}
});

Template.archive.onCreated(function() {
	var template = this;

	template.autorun(function() {
		template.subscribe('archievedMarks');
	})
});

Template.archive.onRendered(function() {
	$inputAccordion = $('.ui.accordion');

	$inputAccordion.accordion('close', 0);
})
