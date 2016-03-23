$(document).ready(function() {
	$('span.show').click(function() {
		$('.instruction').hide();
		$('.list').slideToggle('slow');
	});

	$('span.desc').click(function() {
		$('.list').hide();
		$('.instruction').slideToggle('slow');

	});
});