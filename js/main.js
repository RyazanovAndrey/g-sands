const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const body = document.body;

burger.addEventListener('click', ()=> {
    body.classList.toggle('stop');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})