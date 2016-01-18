Template.tagsList.helpers({
  'tagHierchy': function(tag) {
    var hierchy = `/${tag.name}`;

    if (tag.parent) {
      var parent = getParent(tag._id);
      hierchy = `/${parent}${hierchy}`;
    }

    return hierchy;
  }
});


function getParent(id, prop) {
  var _prop = prop? prop : 'name';
  var obj = Tags.findOne(id)

  if (obj[prop]) {
    return obj[prop]
  } else {
    return '';
  }
}
