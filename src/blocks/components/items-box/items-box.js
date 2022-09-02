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
		btn_shower.classList.add('link-more__btn--expanded');
	} else {
		items_container.classList.remove('items-box__wrapper--expanded');
		items_container.classList.add('items-box__wrapper');
		btn_shower.classList.remove('link-more__btn--expanded');
		btn_shower.innerText = 'Показать все';
	}
};

export { items_box_shower };
