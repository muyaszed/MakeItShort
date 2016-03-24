function arrow_loop() {
	$('#arrow-1').animate({bottom: '40px'}, 500, 'linear').animate({bottom: '50px'}, 500, 'linear', arrow_loop);

	$('#arrow-2').animate({bottom: '40px'}, 500, 'linear').animate({bottom: '50px'}, 500, 'linear', arrow_loop);

	$('#arrow-3').animate({bottom: '40px'}, 500, 'linear').animate({bottom: '50px'}, 500, 'linear', arrow_loop);
}



$(document).ready(function() {

	$('form').submit(function(event){
		event.preventDefault();

		var $form = $( this ),
	    term = $form.find( "input[name='long_url']" ).val(),
	    url = $form.attr( "action" );

	    var posting = $.post( url, { long_url: term } );

	    posting.done(function( data ) {
		    // var content = $( data ).find( ".result" );
		    result = $(data).filter('.result').html();
		    list = $(data).filter('.list').html();
		    console.log(result);
		    console.log(list);
		    $('.result').empty().append(result);
		    $('.list').empty().append(list);
		});

	});


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