import Swiper from 'swiper/bundle';
import { items_box_shower, breakpointChecker } from '../../components/items-box/items-box';
let price_container = document.querySelector('.price__wrapper');
let price__btn = document.querySelector('.price__js-btn-shower');
let price__swiper_container = document.querySelector('.price__swiper');
let price__swiper = undefined;

const breakpoint = window.matchMedia('(min-width: 768px)');

price__btn.addEventListener('click', () => {
	items_box_shower(price_container, price__btn);
});

breakpointChecker(price__swiper_container, breakpoint);
window.addEventListener('optimizedResize', () => {
	breakpointChecker(price__swiper_container, breakpoint);
});
