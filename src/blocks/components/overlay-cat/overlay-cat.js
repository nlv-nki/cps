import { close_modalW } from '../modalW/modalW';
let overlay = document.querySelector('.overlay-cat');
let modal = undefined;

const overlay_click = new Event('overlay_click', {
	bubbles: true,
	cancelable: true,
	composed: false,
});

overlay.addEventListener('click', (e) => {
	overlay.dispatchEvent(overlay_click);
});

document.addEventListener('overlay_click', function () {
	modal = document.querySelector('.modalW__js-is-active');
	close_modal_overlay(modal);
});

const close_modal_overlay = function (modal) {
	overlay.classList.remove('active');
	close_modalW(modal);
};

export { overlay };
