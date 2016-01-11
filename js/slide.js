var userAgent = window.navigator.userAgent;
if (userAgent.indexOf("Android") >= 0) {
	var androidversion = parseFloat(userAgent.slice(userAgent.indexOf("Android") + 8));
}

function initSlide() {
	$('a.lead-link').bind('click', function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 60
		}, 1500);
	});
	if ($(window).width() < 768) {
		$('.royalSlider .rsImg').each(function() {
			var element = $(this);
			//this.href = this.href.replace("-1920x1300", "");
			//this.href = this.href.replace(".jpg", "-960x650.jpg");
		});
	}
	if ($('#full-width-slider').length) {
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		$('#full-width-slider').css({
			'height': windowHeight,
			'width': windowWidth
		});
		if ($('body').hasClass("home")) {
			//var transizione = 'move';
			var transitionEffect = 'fade';
		} else {
			var transitionEffect = 'fade';
		}
		$('#full-width-slider').royalSlider({
			arrowsNav: true,
			loop: true,
			keyboardNavEnabled: true,
			controlsInside: true,
			imageScaleMode: 'fill',
			arrowsNav: false,
			controlNavigation: 'bullets',
			thumbsFitInViewport: false,
			navigateByClick: false,
			startSlideId: 0,
			numImagesToPreload: 2,
			autoPlay: {
				enabled: true,
				pauseOnHover: false,
				delay: 4000
			},
			height: windowHeight,
			width: windowWidth,
			transitionType: transitionEffect,
			globalCaption: false,
			slidesSpacing: 0,
			randomizeSlides: false,
			fadeinLoadedSlide: true,
			addActiveClass: true
		});
		$('#full-width-slider').css({
			'width': '100%'
		});
		// or globally
		var slider = $(".royalSlider").data('royalSlider');
		slider.ev.on('rsAfterContentSet', function(e, slideObject) {
			parallasseRs();
			//console.log('Changed slide.');
			$(".royalSlider").addClass('pronto');
		});
	}
}

function parallasseRs() {
	if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i) || $(window).width() <= 768 ) {
		return; 
	} else {
		var $window = $(window);
		function scrollHandler() {		
			var $bgobj = $('.rsActiveSlide img.rsMainSlideImage, #map_canvas'); // assigning the object	
            if ($bgobj.length) {
				var yPos = (($window.scrollTop() - $bgobj.offset().top + parseInt($bgobj.css('margin-top'), 10)) / 1.4);
				var yPos = Math.round(yPos); //arrotonda
              if ($(window).scrollTop() + $(window).height() > $(document).height()) return;
              $bgobj.css({ top: yPos + 'px' }); 
			}		
		}
		
		$(window).on('scroll', function() {
			window.requestAnimationFrame(scrollHandler);
	   	});
	}
}