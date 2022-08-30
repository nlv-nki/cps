let burger_btn = document.querySelector('.burger__btn');
let close_main_menu_btn;
let menu = document.querySelector('.main-menu');
let menu_close_btn = document.querySelector('.main-menu__btn-close');
burger_btn.addEventListener('click', function (e) {
	if (!menu.classList.contains('main-menu__js-is-active')) menu.classList.add('main-menu__js-is-active');
});

menu_close_btn.addEventListener('click', function (e) {
	if (menu.classList.contains('main-menu__js-is-active')) menu.classList.remove('main-menu__js-is-active');
});
