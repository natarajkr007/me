$(document).ready(function() {
	$(window).scroll(function() {
  	if($(window).scrollTop() > 10) {
    	$('.navbar.navbar-toggleable-md.fixed-top').addClass('navbar-inverse bg-inverse');
    }
    else {
    $('.navbar.navbar-toggleable-md.fixed-top').removeClass('navbar-inverse bg-inverse');
    }
  });
});
