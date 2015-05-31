Meteor.startup(function () {
	$(document).on('keydown', function (e) {
		if(e.keyCode === 13 && e.metaKey) {
			var $mainInputForm = $('.mainInputForm');
			if ($mainInputForm.length && $mainInputForm.find('textarea').val()) {
				$mainInputForm.submit();
			}
		}
	});

	sAlert.config({
		effect: '',
		position: 'top-right',
		timeout: 5000,
		html: false,
		onRouteClose: true,
		stack: true,
		offset: 0,
		effect: 'jelly'
	});
});
