Template.overview.helpers({
	'marks': function() {
		return Marks.find({archived: false}, {sort: {updatedOn: -1}}).fetch();
	}
});

Template.overview.onCreated(function() {
	var template = this;

	template.autorun(function() {
		template.subscribe('indexMarks');
	});
});

Template.overview.onRendered(function() {
	$inputAccordion = $('.ui.accordion');
	$inputAccordion.accordion('open', 0);
})
