import Swiper from 'swiper/bundle';
let instances = {};
const swiper_params = {
	slidesPerView: 1,
	slidesPerView: 'auto',
	spaceBetween: 15,
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	Observer: true,
	Parents: true,
	onSlideChangeEnd: function (swiper) {
		swiper.update();
		с;
		mySwiper.startAutoplay();
		mySwiper.reLoop();
	},
};

const items_box_shower = (items_container, btn_shower, btn_shower_values = { expanded: 'Показать все', collapsed: 'Свернуть' }) => {
	if (!items_container.classList.contains('items-box__wrapper--expanded')) {
		items_container.classList.add('items-box__wrapper--expanded');
		btn_shower.innerText = btn_shower_values.collapsed;
		btn_shower.classList.add('link-more--expanded');
	} else {
		items_container.classList.remove('items-box__wrapper--expanded');
		items_container.classList.add('items-box__wrapper');
		btn_shower.classList.remove('link-more--expanded');
		btn_shower.innerText = btn_shower_values.expanded;
	}
};

const breakpointChecker = function (swiper_container, breakpoint) {
	let swiper_instance_name = swiper_container.classList[1];
	if (breakpoint.matches === true) {
		if (instances.hasOwnProperty(swiper_instance_name) === true) {
			swiper_container.firstElementChild.setAttribute('style', '');
			instances[swiper_instance_name].destroy(true, true);
			delete instances[swiper_instance_name];
			return false;
		}
	}
	if (breakpoint.matches === false) {
		if (instances.hasOwnProperty(swiper_instance_name) === false) {
			instances[swiper_instance_name] = enableSwiper(swiper_container);
			return instances[swiper_instance_name];
		}
	}
};

function enableSwiper(container) {
	return new Swiper(container, swiper_params);
}

export { items_box_shower, breakpointChecker };
