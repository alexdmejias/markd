Meteor.startup(function () {
	$(document).on('keydown', function (e) {
		if(e.keyCode === 13 && e.metaKey) {
			var $mainInputForm = $('.mainInputForm');
			if ($mainInputForm.length && $mainInputForm.find('textarea').val()) {
				$mainInputForm.submit();
			}
		}
	});
});
