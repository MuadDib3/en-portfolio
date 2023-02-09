function toggleNav () {

   const scrollLockPadding = window.innerWidth - document.body.offsetWidth + 'px';
   document.body.style.paddingRight = scrollLockPadding;

   const navModal = document.getElementById('modal-nav');
   navModal.classList.toggle('modal-nav_active');
   document.documentElement.classList.toggle("no-scroll");
}

const navLinks = document.querySelectorAll('.links__item[data-goto]');
if (navLinks.length > 0) {
   navLinks.forEach (navLink => {
      navLink.addEventListener("click", clickOnNavLink);
   });

   function clickOnNavLink(e) {
      const navLink = e.target;
      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
         const gotoBlock = document.querySelector(navLink.dataset.goto);

         if (document.documentElement.clientWidth < 650 ) {
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
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top - 25 + scrollY;
            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth",
            });
         };
         e.preventDefault();
      }
   }
}
