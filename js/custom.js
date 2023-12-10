	$('#one').owlCarousel({
		margin:10,
		loop: true, 
		autoplay: true,
		autoplayHoverPause: true,
		navText: ["<img src='img/left.png'>","<img src='img/right.png'>"],
		responsive: {
			0: {
				items: 2
			},
			600: {
				items:3
			},
			700: {
				items: 3
			},
			800: {
				items: 5
			},
			900: {
				items: 5
			},
			1000: {
				items:6
			},
			1200: {
				items: 7
			},
			1400: {
				items: 7
			}
		}

	});
	$('#two').owlCarousel({
		margin:10,

		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: ["<img src='img/left.png'>","<img src='img/right.png'>"],
		responsive: {
			0: {
				items:1
			},
			600: {
				items:1
			},
			700: {
				items: 1
			},
			800: {
				items: 2
			},
			900: {
				items: 2
			},
			1000: {
				items:3
			},
			1200: {
				items: 3
			},
			1400: {
				items: 3
			}
		}

	});
	 
 $("body").toTopButton({});
   var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();