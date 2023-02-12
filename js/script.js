//show menu

function toggleNav () {

   const scrollLockPadding = window.innerWidth - document.body.offsetWidth + 'px';
   document.body.style.paddingRight = scrollLockPadding;

   const navModal = document.getElementById('modal-nav');
   navModal.classList.toggle('modal-nav_active');
   document.documentElement.classList.toggle("no-scroll");
}

//scroll to section from nav

const navLinks = document.querySelectorAll('.links__item[data-goto]');
if (navLinks.length > 0) {
   navLinks.forEach (navLink => {
      navLink.addEventListener("click", clickOnNavLink);
   });

   function clickOnNavLink(e) {
      const navLink = e.target;
      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
         const gotoBlock = document.querySelector(navLink.dataset.goto);

         if (document.documentElement.clientWidth <= 650 ) {
            const navModal = document.getElementById('modal-nav');
            navModal.classList.remove('modal-nav_active');
            document.documentElement.classList.remove("no-scroll");
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top - 20 + scrollY - document.querySelector('.nav__button').offsetHeight;
            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth",
            });
         }
         else {
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top - 35 + scrollY;
            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth",
            });
         };
         e.preventDefault();
      }
   }
}

//mark current section on nav

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	document.querySelectorAll('section').forEach((el, i) => {
      if (document.documentElement.clientWidth >= 650) {
         if (el.offsetTop + document.querySelector('h3').clientHeight - document.documentElement.clientHeight <= scrollDistance) {

            document.querySelectorAll('.nav a').forEach((el) => {
               if (el.classList.contains('links__item_active')) {
                  el.classList.remove('links__item_active');
               }
            });

         document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('links__item_active');
         }
      }
	});
});

//slider with Swiper

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   spaceBetween: 5,
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });
 