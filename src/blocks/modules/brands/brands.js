import Swiper from 'swiper/bundle';
import { items_box_shower } from '../../components/items-box/items-box';
let brands_container = document.querySelector('.brands__wrapper');
let brands__btn = document.querySelector('.brands__js-btn-shower');
brands__btn.addEventListener('click', () => {
	items_box_shower(brands_container, brands__btn);
});

const breakpoint = window.matchMedia('(min-width: 768px)');
let swiper;

const enableSwiper = function () {
	swiper = new Swiper('.brands__swiper', {
		slidesPerView: 1,
		slidesPerView: 'auto',
		spaceBetween: 15,
		autoplay: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	console.log('onn 1');
};

const breakpointChecker = function () {
	console.log(breakpoint.matches);
	if (breakpoint.matches === true) {
		if (swiper !== undefined) swiper.destroy(true, true);
		return;
	} else if (breakpoint.matches === false) {
		// fire small viewport version of swiper
		console.log('onn ');

		enableSwiper();
	}
};

breakpointChecker();

window.addEventListener('optimizedResize', () => {
	breakpointChecker();
});
