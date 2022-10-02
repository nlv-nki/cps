import { overlay } from '../overlay-cat/overlay-cat';
import { modalW_control } from '../modalW/modalW';
import { search__control } from '../search/search';

let menu = document.querySelector('.main-menu');
let menu__header = document.querySelector('.main-menu__header');
let menu_close_btn = document.querySelector('.main-menu__btn-close');
let main_menu_userlist = document.querySelector('.main-menu__user-list');

const close_menu = () => {
	if (menu.classList.contains('main-menu__js-is-active')) menu.classList.remove('main-menu__js-is-active');
	overlay.classList.remove('active');
};

const main_menu_search_active = () => {
	if (!menu__header.classList.contains('main-menu__search-active')) {
		menu__header.classList.add('main-menu__search-active');
		return;
	}
	if (menu__header.classList.contains('main-menu__search-active')) {
		search__control(true);
	}
};

const main_menu_search_deactive = () => {
	menu__header.classList.remove('main-menu__search-active');
};

menu_close_btn.addEventListener('click', close_menu);
document.addEventListener('overlay_click', close_menu);
menu.addEventListener('search_btn_click', main_menu_search_active);
menu.addEventListener('click', (ev) => {
	if (menu__header.classList.contains('main-menu__search-active')) {
		if (!ev.target.closest('.search')) {
			main_menu_search_deactive();
			search__control(false);
		}
	}
});

main_menu_userlist.addEventListener('click', (e) => {
	let target = e.target.closest('BUTTON');

	if (target.classList.contains('main-menu__btn-feedback')) {
		modalW_control('.modal-feedback');
	}

	if (target.classList.contains('main-menu__btn-call')) {
		modalW_control('.modal-call');
	}

	if (target.classList.contains('main-menu__btn-profile')) {
		modalW_control('.modal-profile');
	}
});

export { menu, menu__header, main_menu_search_deactive };
