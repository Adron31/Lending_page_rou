//==MENU====

const body = document.querySelector('body');
const menu_burger_icon = document.querySelector('.menu__burger-icon');
const menu_body = document.querySelector('.menu__body');

menu_burger_icon.addEventListener('click', function () {
   this.classList.toggle('_active');
   menu_body.classList.toggle('_active');
   body.classList.toggle('_lock');
});


//==SERVICES-HEIGHT====
function changeToMaxHeight () {
   let service_cards = document.querySelectorAll('.service-card');
   if (service_cards.length) {
      let cards_height = [];
      let max_height = 0;
      service_cards.forEach(function (elem, index) {
         elem.style.minHeight = '0px';
         cards_height[index] = elem.offsetHeight;
      });
      max_height = Math.max(...cards_height);
      service_cards.forEach(function (elem) {
         elem.style.minHeight = max_height + 'px';
      });
   }
}
window.addEventListener('resize', function () {
   changeToMaxHeight();
});
changeToMaxHeight();

//anchor navigation
const menu_list = menu_body.querySelector('.menu__list');

menu_list.addEventListener('click', function (evt) {
   const elem = evt.target;

   if (elem.classList.contains('js_anchor')) {
      evt.preventDefault();
      const id = elem.getAttribute('href');
      const id_section = document.querySelector(id);
      id_section.scrollIntoView({
         block: 'start',
         behavior: 'smooth'
      });
   }
});

//focus out
window.addEventListener('mouseup', function (evt) {
   const tag_name = evt.target.tagName;
   const elem = evt.target;
   if (tag_name === 'A' || tag_name === 'BUTTON') {
      elem.blur();
   }
});