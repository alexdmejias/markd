var $tagInputForm;

Template.tagsInput.events({
  'submit .tagInputForm': function(event) {
		event.preventDefault();

    var input = event.target.tagName;
    var $colorInput = $tagInputForm.find('.__color');
    var $parentInput = $tagInputForm.find('.__parent');

    var colorInput = 'grey';
    if ($colorInput.dropdown('get value')) {
      colorInput = $colorInput.dropdown('get value').split(',')[0];
    }

    var parentInput;
    if ($parentInput.dropdown('get value')) {
      parentInput = $parentInput.dropdown('get value').split(',')[0];
    }

    if (!input) {
      sAlert.error('You must include a label name');
    } else {
      var toInsert = {
        name: input.value,
        slug: slugify(input.value),
        user: Meteor.userId(),
        color: colorInput,
        url: slugify(input.value)
      };

      // TODO: show slug
      // TODO: require unique name
      // TODO: require unique slug
      // TODO: show parent relationship in dropdown

      if (parentInput) {
        toInsert.parent = parentInput;
        toInsert.url = Tags.findOne(parentInput).slug + '-' + toInsert.url;
      }

      Tags.insert(toInsert, function(err, _id) {
        if (err) {
          console.warn(err);

          sAlert.error('Something went wrong, please try again');
        } else {
          sAlert.success('New tag created');

          input.value = '';
          $colorInput.dropdown('clear');
          $parentInput.dropdown('clear');
        }
      });
    }
	}
});

Template.tagsInput.onRendered(function() {
  $tagInputForm = $('.tagInputForm');

  $tagInputForm.find('.ui.dropdown').dropdown({
    maxSelections: 1
  });

});

Template.tagsInput.helpers({
  'tags': function() {
    return Tags.find().fetch()
  },

  'tentativeSlug': function() {

    var input = $tagInputForm ? $tagInputForm.find('.__tagName') : 'Read Only';
    return slugify(input);
  }
});
