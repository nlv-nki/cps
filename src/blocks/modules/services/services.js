import { items_box_shower } from '../../components/items-box/items-box';
let services_container = document.querySelector('.content__description-wrapper');
let services__btn = document.querySelector('.services__js-btn-shower');
let services_btn_shower_values = {
	expanded: 'Читать далее',
	collapsed: 'Свернуть',
};
services__btn.addEventListener('click', () => {
	items_box_shower(services_container, services__btn, services_btn_shower_values);
});
