//.slider__reviews

const slider__reviews = new Swiper('.swiper-container', {
	// Optional parameters
	autoplay: {
		delay: 15000,
	},
	loop: true,
	autoHeight: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		hideOnClick: false,
		bulletElement: 'button',
	},
});