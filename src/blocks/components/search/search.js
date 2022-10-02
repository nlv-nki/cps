let container = document.querySelector('.main-menu__header');
let search = document.querySelector('.search__input');
let search__btn = document.querySelector('.search__btn');
let search_is_complete = false;
let data = undefined;
let list_selector = undefined;
let placeholder = search.placeholder;
const search_activate = new Event('search_btn_click', {
	bubbles: true,
	cancelable: true,
	composed: false,
});

const search__data_finder = (selector) => {
	list_selector = selector;
	let list = document.querySelector(selector);
	let items = [...list.children];
	let result = false;
	items.forEach((item) => {
		let key = item.innerText.toLowerCase();
		data = data.toLowerCase();

		if (key.includes(data)) {
			result = item;
		}

		if (!key.includes(data)) {
			item.style.display = 'none';
		}

		if (data == '') {
			item.style.display = 'block';
		}
	});
	return result;
};

const search__control_input = (toggle) => {
	if (toggle === false) {
		if (search.classList.contains('search__error')) {
			search.classList.remove('search__error');
		}

		if (search.placeholder == '') {
			search.placeholder = placeholder;
		}

		if (search.value.length > 0) {
			search.value = '';
			data = '';
			if (list_selector) {
				search__data_finder(list_selector);
			}
		}
	}

	if (toggle === true) {
		if (search.value.length < 1) {
			search.classList.add('search__error');
			return false;
		}
		if (search.value.length > 1) {
			data = search.value;
			return true;
		}
	}
};

const search_active = () => {
	let search_is_active = container.classList.contains('main-menu__search-active');
	let search_is_field_data_valid;
	if (!search_is_active) {
		container.classList.add('main-menu__search-active');
		search_is_complete = false;
		return;
	}
	if (search_is_active) {
		search_is_field_data_valid = search__control_input(true);

		if (!search_is_complete && search_is_field_data_valid) {
			search__data_finder('.main-menu__list');
			search_is_complete = true;
			return;
		}
		if (search_is_complete) {
			search_deactivate();
		}
	}
};

const search_deactivate = () => {
	container.classList.remove('main-menu__search-active');
	search__control_input(false);
};

search__btn.addEventListener('click', (e) => {
	search.dispatchEvent(search_activate);
});

search.addEventListener('search_btn_click', search_active);

search.addEventListener('focus', (e) => {
	search.placeholder = '';
});

export { search_deactivate };
