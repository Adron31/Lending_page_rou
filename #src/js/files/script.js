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
