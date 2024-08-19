const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('#nav');
const navLinks = document.querySelectorAll('.nav__link-span');
const wrapper = document.querySelector('#wrapper');
const navLogo = document.querySelector('.nav__logo');



// Navbar 

navBtn.addEventListener('click', () => {
  navBtn.classList.toggle('nav__btn--active');
  navLogo.classList.toggle('hidden');

  navLinks.forEach((navLink) => {
    navLink.classList.toggle('hidden')
  })

  nav.classList.toggle('nav--hidden')

  wrapper.classList.toggle('wrapper--active')
})




