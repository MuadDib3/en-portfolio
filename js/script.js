function toggleNav () {

   const scrollLockPadding = window.innerWidth - document.body.offsetWidth + 'px';
   document.body.style.paddingRight = scrollLockPadding;

   const navModal = document.getElementById('modal-nav');
   navModal.classList.toggle('modal-nav_active');
   document.documentElement.classList.toggle("no-scroll");
}