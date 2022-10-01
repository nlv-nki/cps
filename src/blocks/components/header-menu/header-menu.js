import { modalW_control } from '../modalW/modalW';
let header_menu_userlist = document.querySelector('.header-menu__user-list');
let header_menu_services = document.querySelector('.header-menu__services');

header_menu_userlist.addEventListener('click', (e) => {
	let target = e.target.closest('BUTTON');
	if (target.classList.contains('header-menu__btn-feedback')) {
		modalW_control('.modal-feedback');
	}

	if (target.classList.contains('header-menu__btn-call')) {
		modalW_control('.modal-call');
	}

	if (target.classList.contains('header-menu__btn-profile')) {
		modalW_control('.modal-profile');
	}
});

header_menu_services.addEventListener('click', (e) => {
	let target = e.target.closest('BUTTON');
	if (target.classList.contains('header-menu__btn-request')) {
		modalW_control('.modal-request');
	}
	if (target.classList.contains('header-menu__btn-checkstatus')) {
		modalW_control('.modal-status');
	}
});
