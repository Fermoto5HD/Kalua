$.ajaxSetup ({
	cache: false
});
var actualPage = undefined; 

$(document).ready(function() {
	if(window.location.hash) {
		var page = window.location.hash; 
		section(page); 
	} else {
		section('#home');
		actualPage = '#home'; 
	}; 

	$(document).on("click", "nav a", function(){
		var link = $(this).attr('href');
		section(link); 
		$('nav a').removeClass('active'); 
		$(this).addClass('active'); 
	});

	// Functions for mobile (powered by Modernizr). 
	var query = Modernizr.mq('(min-width: 768px)');
	$('.navbar-inverse').addClass('onTop');
	if (query) {
		$('a#brand').addClass('onTop');
		$('ul.navbar-right').addClass('onTop'); 
		$(window).scroll(function (event) {
			var scroll = $(document).scrollTop(); 
			if (scroll <= 50){
				$('.navbar-inverse').addClass('onTop');
				$('a#brand').addClass('onTop');
				$('ul.navbar-right').addClass('onTop'); 
			} else {
				$('.navbar-inverse').removeClass('onTop');
				$('a#brand').removeClass('onTop');
				$('ul.navbar-right').removeClass('onTop'); 
			}
		});
	}; 
}); 

var section = function(page){
	var page = page.substring(1); 
	console.log(page); 
	if (actualPage !== page) {
		var loadPage = $.get( 'section/'+page+'.html', function(daPage) {
			$('main#content').html(daPage);
		}).success(function(){
			if (page === "home") {
				console.log('home'); 
				$('main').addClass('home');
				$('footer').addClass('home'); 
			} else {
				console.log('otra pagina'); 
				$('main').removeClass('home'); 
				$('footer').removeClass('home'); 
			}; 
		})
		.fail(function() { 
			section('#home'); 
		});
		window.location.hash = page; 
		actualPage = page; 
	};
}; 