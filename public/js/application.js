function arrow_loop() {
	$('#arrow-1').animate({bottom: '40px'}, 500, 'linear').animate({bottom: '50px'}, 500, 'linear', arrow_loop);

	$('#arrow-2').animate({bottom: '40px'}, 500, 'linear').animate({bottom: '50px'}, 500, 'linear', arrow_loop);

	$('#arrow-3').animate({bottom: '40px'}, 500, 'linear').animate({bottom: '50px'}, 500, 'linear', arrow_loop);
}

$(document).ready(function() {
	$('span.show').click(function() {
		$('.instruction').hide();
		$('.list').slideToggle('slow');
	});

	$('span.desc').click(function() {
		$('.list').hide();
		$('.instruction').slideToggle('slow');
		arrow_loop();

	});

	// $('#step-2').insertAfter("#step-3");
	// $('#step-1').insertAfter("#step-2");

	$('#next-1').click(function() {
		$('#step-1').hide('slide', {direction: 'right'}, 1000);
		$('#step-2').show('slide', {direction: 'left'}, 1000);

	});

	$('#next-2').click(function() {
		$('#step-2').hide('slide', {direction: 'right'}, 1000);
		$('#step-3').show('slide', {direction: 'left'}, 1000);
		if ($('#step-3').css('display') == 'block') {
		
			$('.instruction').animate({height: '450px'}, 'slow');
		};

	});

	$('#prev-2').click(function() {
		$('#step-1').show('slide', {direction: 'right'}, 1000);
		$('#step-2').hide('slide', {direction: 'left'}, 1000);

	});

	$('#prev-3').click(function() {
		$('#step-2').show('slide', {direction: 'right'}, 1000);
		$('#step-3').hide('slide', {direction: 'left'}, 1000);
		if ($('#step-3').css('display') == "none") {
		
			$('.instruction').animate({height: '350px'}, 'slow');
		};

	});

	




	
});