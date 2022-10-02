import { main_menu_search_deactive } from '../main-menu/main-menu';
let search = document.querySelector('.search__input');
let search__btn = document.querySelector('.search__btn');
const search_activate = new Event('search_click', {
	bubbles: true,
	cancelable: true,
	composed: false,
});

const search__control = (toggle) => {
	if (toggle === false && search.classList.contains('search__error')) {
		search.classList.remove('search__error');
		main_menu_search_deactive();
	}

	if (toggle === true)
		if (!search.classList.contains('search__error') && search.value.length < 1) {
			search.classList.add('search__error');
		}
};

search__btn.addEventListener('click', (e) => {
	search.dispatchEvent(search_activate);
});

search.addEventListener('focusout', (ev) => {
	search.dispatchEvent(search_activate);
	search__control(false);
});

export { search__control };
