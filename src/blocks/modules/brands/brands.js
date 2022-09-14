import Swiper from 'swiper/bundle';
import { items_box_shower, breakpointChecker } from '../../components/items-box/items-box';
let brands_container = document.querySelector('.brands__wrapper');
let brands__swiper;
let brands__swiper_container = document.querySelector('.brands__swiper');
let brands__btn = document.querySelector('.brands__js-btn-shower');
const breakpoint = window.matchMedia('(min-width: 768px)');

brands__btn.addEventListener('click', () => {
	items_box_shower(brands_container, brands__btn);
});
brands__swiper = breakpointChecker(brands__swiper_container, breakpoint);
window.addEventListener('resize', function (e) {
	brands__swiper = breakpointChecker(brands__swiper_container, breakpoint);
});
