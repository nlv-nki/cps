import Swiper from 'swiper/bundle';
import { items_box_shower, breakpointChecker } from '../../components/items-box/items-box';
let repair_container = document.querySelector('.repair__wrapper');
let repair__btn = document.querySelector('.repair__js-btn-shower');
let repair__swiper_container = document.querySelector('.repair__swiper');
let repair__swiper = undefined;

const breakpoint = window.matchMedia('(min-width: 768px)');

repair__btn.addEventListener('click', () => {
	items_box_shower(repair_container, repair__btn);
});

breakpointChecker(repair__swiper_container, breakpoint);
window.addEventListener('optimizedResize', () => {
	console.log(123);
	breakpointChecker(repair__swiper_container, breakpoint);
});
