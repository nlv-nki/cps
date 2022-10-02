let search = document.querySelector('.search__input');
let search__btn = document.querySelector('.search__btn');
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

	items.forEach((item) => {
		let key = item.innerText.toLowerCase();
		data = data.toLowerCase();
		if (!key.includes(data)) {
			item.style.display = 'none';
		}
		if (data == '') {
			item.style.display = 'block';
		}
	});
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

search__btn.addEventListener('click', (e) => {
	search.dispatchEvent(search_activate);
});

search.addEventListener('focus', (e) => {
	search.placeholder = '';
});

export { search__control_input, search__data_finder };
