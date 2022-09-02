import Swiper from 'swiper/bundle';
import { items_box_shower } from '../../components/items-box/items-box';
let repair_container = document.querySelector('.repair__wrapper');
let repair__btn = document.querySelector('.repair__btn');

repair__btn.addEventListener('click', () => {
	items_box_shower(repair_container, repair__btn);
});
