import Swiper from 'swiper/bundle';
(function () {
	var throttle = function (type, name, obj) {
		obj = obj || window;
		var running = false;
		var func = function () {
			if (running) {
				return;
			}
			running = true;
			requestAnimationFrame(function () {
				obj.dispatchEvent(new CustomEvent(name));
				running = false;
			});
		};
		obj.addEventListener(type, func);
	};

	/* init - you can init any event */
	throttle('resize', 'optimizedResize');
})();

const items_box_shower = (items_container, btn_shower) => {
	if (!items_container.classList.contains('items-box__wrapper--expanded')) {
		items_container.classList.add('items-box__wrapper--expanded');
		btn_shower.innerText = 'Свернуть';
		btn_shower.classList.add('link-more--expanded');
	} else {
		items_container.classList.remove('items-box__wrapper--expanded');
		items_container.classList.add('items-box__wrapper');
		btn_shower.classList.remove('link-more--expanded');
		btn_shower.innerText = 'Показать все';
	}
};
let swiper;
const breakpointChecker = function (swiper_container, breakpoint) {
	console.log(breakpoint.matches);
	//let swiper;
	if (breakpoint.matches === true) {
		console.log(swiper);
		if (swiper !== undefined) swiper.destroy(true, true);
		return;
	} else if (breakpoint.matches === false) {
		// fire small viewport version of swiper
		console.log('breakpoint false' + ' swiper enable ');
		swiper = enableSwiper(swiper_container);
	}
	//console.log(swiper);
};

const enableSwiper = function (container) {
	let swiper = new Swiper(container, {
		slidesPerView: 1,
		slidesPerView: 'auto',
		spaceBetween: 15,
		autoplay: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	return swiper;
};

export { items_box_shower, enableSwiper, breakpointChecker };
