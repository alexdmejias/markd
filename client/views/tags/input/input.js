Template.tagsInput.events({
  'submit .tagInputForm': function(event) {
		event.preventDefault();

    var input = event.target.labelName;

    if (!input) {
      sAlert.error('You must include a label name');
    } else {
      var toInsert = {
        name: input.value,
        slug: slugify(input.value),
        user: Meteor.userId(),
        color: $('.color.dropdown').dropdown('get value'),
        parent: 'this is the parent'
      };

      Tags.insert(toInsert, function(err, _id) {
        if (!err) {
          sAlert.error('Something went wrong, please try again');
        } else {
          sAlert.success('New tag created');
        }
      });
    }
	}
});

Template.tagsInput.onRendered(function() {
  $('.ui.dropdown').dropdown();
});

Template.tagsInput.helpers({});
