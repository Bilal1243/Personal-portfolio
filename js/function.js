(function ($) {
	"use strict";

	var $window = $(window);
	var $body = $('body');


	/* slick nav */
	$('#main-menu').slicknav({ prependTo: '#responsive-menu', label: '', closeOnClick: true });

	/* Sticky header */
	$window.scroll(function () {
		if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});

	/* Top Menu */
	$(document).on('click', '.navbar-nav li a, #responsive-menu ul li a', function () {
		if ($(this).hasClass("has-popup")) return false;
		var id = $(this).attr('href');
		if ($(id).length) {
			var h = parseFloat($(id).offset().top);
			$('body,html').stop().animate({
				scrollTop: h - 74
			}, 800);
			return false;
		}
	});

	/* Testimonial slider */
	var swiper = new Swiper('.testimonial-slider', {
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: true,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		}
	});

	/*Portfolio (filtering) */
	/* Init Isotope */
	var $portfolio = $(".portfolio-boxes").isotope({
		itemSelector: ".portfolio-box",
		layoutMode: "masonry"
	});

	/* Set initial filtering */
	$window.load(function () {
		$portfolio.isotope({ filter: "*" });
	});

	/* Filter items on click */
	var $portfolionav = $(".portfolio-nav li a");
	$portfolionav.on('click', function (e) {

		var filterValue = $(this).attr('data-filter');
		$portfolio.isotope({
			filter: filterValue
		});

		$portfolionav.removeClass("active-portfolio");
		$(this).addClass("active-portfolio");
		e.preventDefault();
	});

	/* Portfolio magnific popup */
	$('.has-popup').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade'
	});


	/* Popup video */
	var $popupvideo = $(".popup-video");
	if ($popupvideo.length) {
		$popupvideo.magnificPopup({
			type: 'iframe',
			preloader: true,
		});
	}

	/* Init Counter */
	$('.counter').counterUp({ delay: 10, time: 1000 });

	/* Animate with wow js */
	new WOW({ mobile: false }).init();

})(jQuery);

function valid() {
	let userName = document.getElementById("name");
	let userEmail = document.getElementById("email");
	let userSubject = document.getElementById("subject");
	let userNote = document.getElementById("helpnote");


	if (userName.value == "") {
		alert("please complete all area");
		document.myForm.name.focus();
		return false;
	}
	if (userEmail.value == "") {
		alert("please complete all area");
		document.myForm.email.focus();
		return false;
	}
	if (userSubject.value == "") {
		alert("please complete all area");
		document.myForm.subject.focus();
		return false;
	}
	if (userNote.value == "") {
		alert("please complete all area");
		document.myForm.helpnote.focus();
		return false;
	}
	return true;
}

$("#contactForm").submit((e) => {
	e.preventDefault()
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbym5oBNCVRPhK-UD06qi1cKw4pczAzSgyhDfavR1CepRahv3JK9NZSUx4t7EPfbJCV0-w/exec",
		data: $("#contactForm").serialize(),
		method: "post",
		success: function (response) {
			alert("Form submitted successfully")
			window.location.reload()
		},
		error: function (err) {
			alert("Something Error")

		}
	})
})
