import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// Navigation 

let hamburguer = document.querySelector('.menu__hamburguer');
let header = document.querySelector('header');
let box = document.querySelector('.box');

hamburguer.addEventListener('click', (e) => {
    hamburguer.classList.toggle('open')
    header.classList.toggle('reveal')
    box.classList.toggle('boxReveal')
})

