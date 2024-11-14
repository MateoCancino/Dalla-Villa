let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar__item a');
    menu.onclick = () =>{
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    }
    navLinks.forEach(link => {
        link.onclick = () => {
            menu.classList.remove('bx-x');
            navlist.classList.remove('open');
        }
    });