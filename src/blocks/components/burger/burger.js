import { menu } from '../main-menu/main-menu';
let burger_btn = document.querySelector('.burger__btn');
let overlay = document.querySelector('.overlay-cat');
burger_btn.addEventListener('click', function (e) {
	overlay.classList.add('active');
	if (!menu.classList.contains('main-menu__js-is-active')) menu.classList.add('main-menu__js-is-active');
});
