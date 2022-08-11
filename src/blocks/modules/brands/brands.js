import Swiper from "swiper/bundle";

let brands_container = document.querySelector(".brands__wrapper");
let brands__btn = document.querySelector(".brands__btn");

const catalog_shower = () => {
	if (!brands_container.classList.contains("brands__wrapper--expanded")) {
		brands_container.classList.add("brands__wrapper--expanded");
		brands__btn.innerText = "Свернуть";
		brands__btn.classList.add("brands__btn--expanded");
	} else {
		brands_container.classList.remove("brands__wrapper--expanded");
		brands__btn.classList.remove("brands__btn--expanded");
		brands__btn.innerText = "Показать все";
	}
};

brands__btn.addEventListener("click", catalog_shower);

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
	throttle("resize", "optimizedResize");
})();

const breakpoint = window.matchMedia("(min-width: 768px)");
let swiper;

const enableSwiper = function () {
	swiper = new Swiper(".brands__swiper", {
		slidesPerView: 1,
		slidesPerView: "auto",
		spaceBetween: 15,
		autoplay: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	console.log("onn 1");
};

const breakpointChecker = function () {
	console.log(breakpoint.matches);
	if (breakpoint.matches === true) {
		if (swiper !== undefined) swiper.destroy(true, true);
		return;
	} else if (breakpoint.matches === false) {
		// fire small viewport version of swiper
		console.log("onn ");

		enableSwiper();
	}
};

breakpointChecker();
window.addEventListener("optimizedResize", () => {
	breakpointChecker();
});
