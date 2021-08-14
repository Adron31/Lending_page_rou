const form_footer = document.querySelector('.form-footer');
const form_footer_input = form_footer.querySelector('input');

form_footer_input.addEventListener('focus', function (evt) {
	form_footer.classList.add('_focus');
});

form_footer_input.addEventListener('blur', function (evt) {
	form_footer.classList.remove('_focus');
});