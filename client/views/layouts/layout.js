Template.layout.helpers({
	'loggedIn': function() {
		return Meteor.userId();
	}
});

Template.layout.onCreated(function() {
	var template = this;
	template.autorun(function() {
		template.subscribe('tagsList');
	});
});
