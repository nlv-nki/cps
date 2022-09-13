import Swiper from 'swiper/bundle';

const items_box_shower = (items_container, btn_shower, btn_shower_values = { expanded: 'Показать все', collapsed: 'Свернуть' }) => {
	if (!items_container.classList.contains('items-box__wrapper--expanded')) {
		items_container.classList.add('items-box__wrapper--expanded');
		//btn_shower.innerText = 'Свернуть';
		btn_shower.innerText = btn_shower_values.collapsed;
		btn_shower.classList.add('link-more--expanded');
	} else {
		items_container.classList.remove('items-box__wrapper--expanded');
		items_container.classList.add('items-box__wrapper');
		btn_shower.classList.remove('link-more--expanded');
		//	btn_shower.innerText = 'Показать все';
		btn_shower.innerText = btn_shower_values.expanded;
	}
};
let swiper;
const breakpointChecker = function (swiper_container, breakpoint, instance) {
	if (breakpoint.matches === true) {
		console.log(instance, 220);

		if (instance !== undefined) {
			console.log(instance, 221);
			instance.destroy(true, true);
			return;
		}
	} else if (breakpoint.matches === false) {
		instance = enableSwiper(swiper_container);
		return instance;
	}
};

const enableSwiper = function (container) {
	return new Swiper(container, {
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
	});
};

export { items_box_shower, enableSwiper, breakpointChecker };
