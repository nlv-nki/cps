import { overlay } from '../overlay-cat/overlay-cat';
let modal = undefined;
let modalW_close_btn = undefined;
let is_open = false;
const close_modalW = function (modal) {
	if (typeof modal !== 'string') {
		let modal_name = Array.from(modal.classList)
			.filter((index) => index.includes('modal-'))
			.join(' ');
		modal = document.querySelector(`.${modal_name}`);
	}
	modal.classList.remove('modalW__js-is-active');
	overlay.classList.remove('active');
	is_open = false;
};

const open_modalW = function (modal) {
	if (!modal.classList.contains('modalW__js-is-active')) {
		modal.classList.add('modalW__js-is-active');
		overlay.classList.add('active');
		is_open = true;
	}
};

const modalW_control = function (modal_name) {
	if (!is_open) {
		modal = document.querySelector(modal_name);
		modalW_close_btn = modal.querySelector('.modalW__btn-close');
	}

	if (!modal.classList.contains('modalW__js-is-active')) {
		open_modalW(modal);
	}

	modalW_close_btn.addEventListener('click', function () {
		close_modalW(modal);
	});
};

export { modalW_control, close_modalW };
