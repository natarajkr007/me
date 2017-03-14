$(document).ready(function() {
	$(window).scroll(function() {
  	if($(window).scrollTop() > 10) {
    	$('.navbar.navbar-toggleable-md.fixed-top').addClass('navbar-inverse bg-inverse');
    }
    else {
    $('.navbar.navbar-toggleable-md.fixed-top').removeClass('navbar-inverse bg-inverse');
    }

		var wScroll = $(this).scrollTop();
		console.log(wScroll/14);
		var pContainerHeight = $('#home').height();
		if (wScroll/14 <= 46) {
	    $('.iron-man img').css({
				 'transform' : 'translate(0px, -'+ wScroll /12 +'%)'
	    });
		}
  });
});
