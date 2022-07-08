const menu = document.querySelector('.navbar_menu');
const links = document.querySelector('.navbar_left-links');


menu.addEventListener('click', ()=> {
    links.classList.toggle('show-menu')
})

