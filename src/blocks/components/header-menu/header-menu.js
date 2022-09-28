import { modal_feedback } from '../modal-feedback/modal-feedback';
let overlay = document.querySelector('.overlay-cat');
let header_menu_userlist = document.querySelector('.header-menu__user-list');
header_menu_userlist.addEventListener('click', (e) => {
	let target = e.target.closest('BUTTON');

	if (target.classList.contains('header-menu__btn-modal')) {
		modal_feedback.classList.add('modal-feedback__js-is-active');
		overlay.classList.add('active');
	}
});
