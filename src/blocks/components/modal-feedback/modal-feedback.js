import { overlay } from '../overlay-cat/overlay-cat';
let modal_feedback = document.querySelector('.modal-feedback');
let modal_close_btn = document.querySelector('.modal-feedback__btn-close');

const close_modal_feedback = () => {
	if (modal_feedback.classList.contains('modal-feedback__js-is-active')) modal_feedback.classList.remove('modal-feedback__js-is-active');
	overlay.classList.remove('active');
};

modal_close_btn.addEventListener('click', close_modal_feedback);

document.addEventListener('overlay_click', close_modal_feedback);

export { modal_feedback };
