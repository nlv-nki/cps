let overlay = document.querySelector('.overlay-cat');
export { overlay };

const overlay_click = new Event('overlay_click', {
	bubbles: true,
	cancelable: true,
	composed: false,
});

overlay.addEventListener('click', (e) => {
	overlay.dispatchEvent(overlay_click);
});
