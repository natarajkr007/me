$(document).ready(function() {
	$(window).scroll(function() {
		// to add nav bar after scrolling
  	// if($(window).scrollTop() > 10) {
    // 	$('.navbar.navbar-toggleable-md.fixed-top').addClass('navbar-inverse bg-inverse');
    // }
    // else {
    // $('.navbar.navbar-toggleable-md.fixed-top').removeClass('navbar-inverse bg-inverse');
    // }
    //
		// // to move iron-man
		// var wScroll = $(this).scrollTop();
		// console.log(wScroll/14);
		// var pContainerHeight = $('#home').height();
		// if (wScroll/14 <= 46) {
	  //   $('.iron-man img').css({
		// 		 'transform' : 'translate(0px, -'+ wScroll /12 +'%)'
	  //   });
		// }
  });

	// to get typed effect
	var aboutsTyped = new Typed('#abouts-typed', {
    stringsElement: '#typed-abouts',
		typeSpeed: 75,
		startDelay: 1000,
		backSpeed: 50,
		smartBackspace: true,
		backDelay: 1000,
		loop: true,
  	loopCount: Infinity,
		cursorChar: '__',
  });

	var welcomeTyped = new Typed('#welcome-typed', {
    strings: [
							'<span style="color: #3a7dda">< !DOCTYPE html ></span>\n `<span style="color: #3a7dda">\t< html ></span>`\n `<span style="color: #40dac5">\t\t< head ></span>`\n `<span style="color: #ffbc3e">\t\t\t< title ></span><span style="color: #666"> Welcome ;-) </span><span style="color: #ffbc3e">< / title ></span>`',
							'<span style="color: #666"><span style="color: #9C27B0"># include < stdio.h ></span>\n\n `<span style="color: #3A7DDA">void</span> <span style="color: #ffbc3e"> main</span> ( ) {`\n `\t<span style="color: #4CAF50">printf</span> (" Welcome ;-) ");`\n ` }`</span>'
						 ],
    typeSpeed: 75,
    backSpeed: 50,
		fadeOut: true,
		fadeOutDelay: 1000,
		showCursor: false,
		contentType: 'html',
		backDelay: 1000,
		loop: true,
  	loopCount: Infinity,
  });

	// to make chartist chart
	var data = {
  	labels: ['Logical thinking', 'Coding', 'Communication', 'Tinkering', 'Web developement', 'Presentation', 'LaTex'],
  	series: [
    	[5, 5, 4, 4, 5, 4, 3]
  	]
	};
	var chart = new Chartist.Bar('.ct-chart', data, {
		axisX: {
			position: 'start', // start or end
		},
		axisY: {
			onlyInteger: true
		}
	});
	var seq = 0;
	chart.on('created', function() {
		seq = 0;
	});
	chart.on('draw', function(data) {
		if(data.type === 'bar') {
			data.element.animate({
				y2: {
        	begin: seq++ * 80,
        	dur: 500,
        	from: 0,
        	to: data.y2,
        	easing: Chartist.Svg.Easing.easeOutQuart
      	}
			});
		}
	});

});
