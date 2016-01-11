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
  var $tagInputForm = $('.tagInputForm');

  $tagInputForm.find('.ui.dropdown').dropdown({
    maxSelections: 1
  });

});

Template.tagsInput.helpers({
  'tags': function() {
    return Tags.find().fetch()
  }
});
