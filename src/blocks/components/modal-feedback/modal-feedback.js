let modal = document.querySelector('.modal-feedback');
let modal_close_btn = document.querySelector('.modal-feedback__btn-close');
let overlay = document.querySelector('.overlay-cat');

modal_close_btn.addEventListener('click', function (e) {
	if (modal.classList.contains('modal-feedback__js-is-active')) modal.classList.remove('modal-feedback__js-is-active');
	overlay.classList.remove('active');
});

export { modal };
