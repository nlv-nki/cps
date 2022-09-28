import { modal_feedback } from '../modal-feedback/modal-feedback';
import { overlay } from '../overlay-cat/overlay-cat';

let menu = document.querySelector('.main-menu');
let menu__header = document.querySelector('.main-menu__header');
let menu_close_btn = document.querySelector('.main-menu__btn-close');
let main_menu_userlist = document.querySelector('.main-menu__user-list');
let menu_search_btn = document.querySelector('.main-menu__btn-search');

const close_menu = () => {
	if (menu.classList.contains('main-menu__js-is-active')) menu.classList.remove('main-menu__js-is-active');
	overlay.classList.remove('active');
};

menu_close_btn.addEventListener('click', close_menu);
document.addEventListener('overlay_click', close_menu);

menu_search_btn.addEventListener('click', function (e) {
	if (!menu__header.classList.contains('main-menu__search-active')) {
		menu__header.classList.add('main-menu__search-active');
	} else menu__header.classList.remove('main-menu__search-active');
});

main_menu_userlist.addEventListener('click', (e) => {
	let target = e.target.closest('BUTTON');

	if (target.classList.contains('main-menu__btn-modal')) {
		modal_feedback.classList.add('modal-feedback__js-is-active');
		overlay.classList.add('active');
	}
});

export { menu };
