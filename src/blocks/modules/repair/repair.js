import { items_box_shower, breakpointChecker } from '../../components/items-box/items-box';
let repair_container = document.querySelector('.repair__wrapper');
let repair__btn = document.querySelector('.repair__js-btn-shower');
let repair__swiper_container = document.querySelector('.repair__swiper');
let repair__swiper = undefined;

const breakpoint = window.matchMedia('(min-width: 768px)');

repair__btn.addEventListener('click', () => {
	items_box_shower(repair_container, repair__btn);
});
repair__swiper = breakpointChecker(repair__swiper_container, breakpoint, repair__swiper);
window.addEventListener('resize', () => {
	repair__swiper = breakpointChecker(repair__swiper_container, breakpoint, repair__swiper);
});
