import Swiper from 'swiper/bundle';
import { items_box_shower, breakpointChecker } from '../../components/items-box/items-box';
let brands_container = document.querySelector('.brands__wrapper');
let brands__swiper = undefined;
let brands__swiper_container = document.querySelector('.brands__swiper');
let brands__btn = document.querySelector('.brands__js-btn-shower');
const breakpoint = window.matchMedia('(min-width: 768px)');

brands__btn.addEventListener('click', () => {
	items_box_shower(brands_container, brands__btn);
});

// const enableSwiper = function () {
// 	let swiper;
// 	swiper = new Swiper('.brands__swiper', {
// 		slidesPerView: 1,
// 		slidesPerView: 'auto',
// 		spaceBetween: 15,
// 		autoplay: true,
// 		pagination: {
// 			el: '.swiper-pagination',
// 			clickable: true,
// 		},
// 	});
// 	return swiper;
// 	console.log('onn 1');
// };

// const breakpointChecker = function () {
// 	console.log(breakpoint.matches);
// 	if (breakpoint.matches === true) {
// 		if (swiper !== undefined) swiper.destroy(true, true);
// 		return;
// 	} else if (breakpoint.matches === false) {
// 		// fire small viewport version of swiper
// 		console.log('onn ');

// 		enableSwiper();
// 	}
// };

breakpointChecker(brands__swiper_container, breakpoint);
window.addEventListener('optimizedResize', () => {
	breakpointChecker(brands__swiper_container, breakpoint);
});
