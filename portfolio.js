$(document).ready(function() { 

	$(window).load(function(){   
		$('.loading').fadeOut(500); 
		$('.preHidden').delay(500).fadeIn(1000);
	});

	$(".homepage-buttons").hover(function(){

		$(this).stop(true, false).animate({
			backgroundColor: "rgb(133,133,133)",
			color: 'rgb(25,25,25)',
			borderColor: 'rgb(133,133,133)'
		})
	}, function(){
		$(this).stop(true, false).animate({
			backgroundColor: "rgb(25,25,25)",
			color: 'rgb(133,133,133)',
			borderColor: 'rgb(53,53,53)'
		})
	});

	$('#btn-toggle').on('click', function() {
		// body...
	})

	$('#btn-works').on('click', function () {
		$('#works').show();
		$('#yang').hide();
	});
	$('#btn-yang').on('click', function () {
		$('#yang').show();
		$('#works').hide();
	});

	$(".page-works").hover(function(){
		$(this).children('.works-thumbnail').children().css('-webkit-filter', 'grayscale(0%)');
		$(".page-works").not(this).stop(true, false).animate({
			opacity: 0.25
		}, 250);

		//$(".works-thumbnail", $(this)).css("box-shadow", "0px 2px 9px -3px rgb(15,15,15)");

	},function() {
		$(this).children('.works-thumbnail').children().css('-webkit-filter', 'grayscale(15%)');
		$(".page-works").not(this).stop(true, false).animate({
			opacity: 1
		},250);

		//$(".works-thumbnail", $(this)).css("box-shadow", "0px 0px 0px 0px");
		
	});	

	$('.next-button').click(function() {
		//alert();
		$(this).parent().next().show();
	})
});