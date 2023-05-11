const headerNav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', ()=> {
    document.body.style.overflow = 'hidden'
    burger.classList.toggle('active');
    headerNav.classList.toggle('header__nav-mobile');
})