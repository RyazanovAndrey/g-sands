const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const body = document.body;

burger.addEventListener('click', ()=> {
    body.classList.toggle('stop');
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

menu.addEventListener('click', (e)=> {
    if(e.target == menu){
        menu.classList.remove('active');
        burger.classList.remove('active');
        body.classList.remove('stop');
    }
});



mask('[data-tel]');

const phoneInput = document.querySelector('[data-tel]');

phoneInput.addEventListener('blur', ()=> {
    if(phoneInput.value == '+'){
        phoneInput.value = ''
     }
})