import { modal } from '../modal-feedback/modal-feedback';
let menu = document.querySelector('.main-menu');
let menu__header = document.querySelector('.main-menu__header');
let overlay = document.querySelector('.overlay-cat');
let menu_close_btn = document.querySelector('.main-menu__btn-close');
let main_menu_userlist = document.querySelector('.main-menu__user-list');
let menu_search_btn = document.querySelector('.main-menu__btn-search');

menu_close_btn.addEventListener('click', function (e) {
	if (menu.classList.contains('main-menu__js-is-active')) menu.classList.remove('main-menu__js-is-active');
	overlay.classList.remove('active');
});

menu_search_btn.addEventListener('click', function (e) {
	if (!menu__header.classList.contains('main-menu__search-active')) {
		menu__header.classList.add('main-menu__search-active');
	} else menu__header.classList.remove('main-menu__search-active');
});

main_menu_userlist.addEventListener('click', (e) => {
	let target = e.target.closest('BUTTON');

	if (target.classList.contains('main-menu__btn-modal')) {
		modal.classList.add('modal-feedback__js-is-active');
		overlay.classList.add('active');
	}
});

export { menu };
