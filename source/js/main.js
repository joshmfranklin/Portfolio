$( document ).ready(function() {

	// $('a[href*=#]').click(function(event){
	// 	$('html, body').animate({
	// 	    scrollTop: $( $.attr(this, 'href') ).offset().top
	// 	}, 500);
	// 	event.preventDefault();
	// });

	$(".mobile-btn").click(function(){
	    $("ul").toggleClass("lista");
	});
    
});
