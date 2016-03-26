function arrow_loop() {
	$('#arrow-1').animate({bottom: '40px'}, 500, 'linear').animate({bottom: '50px'}, 500, 'linear', arrow_loop);

	$('#arrow-2').animate({bottom: '40px'}, 500, 'linear').animate({bottom: '50px'}, 500, 'linear', arrow_loop);

	$('#arrow-3').animate({bottom: '30px'}, 500, 'linear').animate({bottom: '40px'}, 500, 'linear', arrow_loop);

	$('.left-arrow').animate({left: '160px'}, 500, 'linear').animate({left: '150px'}, 500, 'linear', arrow_loop);

	$('.right-arrow').animate({right: '160px'}, 500, 'linear').animate({right: '150px'}, 500, 'linear', arrow_loop);
}

function my_ajax() {

	var $form = $( 'form' ),
	    term = $form.find( "input[name='long_url']" ).val(),
	    url = $form.attr( "action" );

	    var posting = $.post( url, { long_url: term } );

	    posting.done(function( data ) {
		    // var content = $( data ).find( ".result" );
		    result = $(data).filter('.header').find('.result').html();
		    list = $(data).filter('.list').html();
		    console.log(result);
		    console.log(list);
		    $('.result').empty().show().append(result);
		    $('.list').empty().append(list);
		});
}


$(document).ready(function() {

	$(".name").bind('paste', function() {
		$('input[type="submit"]').trigger('click');
	});	


	$('form').submit(function(event){
		event.preventDefault();
		my_ajax();
		

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

	// $('#next-1').click(function() {
	// 	$('#step-1').hide('slide', {direction: 'right'}, 1000);
	// 	$('#step-2').show('slide', {direction: 'left'}, 1000);

	// });

	// $('#next-2').click(function() {
	// 	$('#step-2').hide('slide', {direction: 'right'}, 1000);
	// 	$('#step-3').show('slide', {direction: 'left'}, 1000);
	// 	if ($('#step-3').css('display') == 'block') {
		
	// 		$('.instruction').animate({height: '450px'}, 'slow');
	// 	};

	// });

	// $('#prev-2').click(function() {
	// 	$('#step-1').show('slide', {direction: 'right'}, 1000);
	// 	$('#step-2').hide('slide', {direction: 'left'}, 1000);

	// });

	// $('#prev-3').click(function() {
	// 	$('#step-2').show('slide', {direction: 'right'}, 1000);
	// 	$('#step-3').hide('slide', {direction: 'left'}, 1000);
	// 	if ($('#step-2').css('display') == "block") {
		
	// 		$('.instruction').animate({height: '350px'}, 'slow');
	// 	};

	// });

	if($('#step-1').css('display') == 'block') {
		$('.right-arrow').mouseenter(function() {
			$(this).css('color', 'red');
		});
		$('.right-arrow').mouseleave(function() {
			$(this).css('color', 'black');
		});
	};

	$('.left-arrow').click(function() {
			

		if($('#step-2').css('display') == 'block') {
			$('.right-arrow').mouseenter(function() {
				$(this).css('color', 'red');
			});
			$('.left-arrow').mouseenter(function() {
				$(this).css('color', 'black');
			});
			$('#step-2').hide('slide', {direction: 'left'}, 1000);
			$('#step-1').show('slide', {direction: 'right'}, 1000);
		}else if($('#step-3').css('display') == 'block') {
			$('.right-arrow').mouseenter(function() {
				$(this).css('color', 'red');
			});
			$('#step-3').hide('slide', {direction: 'left'}, 1000);
			$('#step-2').show('slide', {direction: 'right'}, 1000);
			// $('.right-arrow').show();

		}
	});

	$('.right-arrow').click(function() {


		if($('#step-1').css('display') == 'block') {
			$('.left-arrow').mouseenter(function() {
				$(this).css('color', 'red');
			});
			$('.left-arrow').mouseleave(function() {
				$(this).css('color', 'black');
			});
			$('#step-1').hide('slide', {direction: 'right'}, 1000);
			$('#step-2').show('slide', {direction: 'left'}, 1000);
		}else if($('#step-2').css('display') == 'block') {
			// $('.instruction').animate({height: '450px'}, 'slow');
			$('.right-arrow').mouseenter(function() {
				$(this).css('color', 'black');
			});
													
			$('#step-2').hide('slide', {direction: 'right'}, 1000);
			$('#step-3').show('slide', {direction: 'left'}, 1000);
		};
	});

	
});