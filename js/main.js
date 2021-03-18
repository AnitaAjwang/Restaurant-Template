//select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//set Initial state of menu
let showMenu = false;//let and not const is used because it allows for reassignment

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add('close');//will add close to the menu-btn class i.e. menu-btn close
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set menu state
        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;

    }
}

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300 ) {
        menu.classList.add("nav-colored");
        //myNav.classList.remove("nav-transparent");
    } 
    else {
        //myNav.classList.add("nav-transparent");
        menu.classList.remove("nav-colored");
    }
};

$(document).ready(function(){
    $("#menu .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000 : {
                items: 2
            }
        }
    });
    $("#about .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768:
            {items:1
            },
            812: {
                items: 1
            },
            991:{
                items:1
            },
            1000 : {
                items: 1
            }
        }
    });
    
});