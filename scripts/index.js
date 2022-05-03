import LocomotiveScroll from 'locomotive-scroll';
import { Back, gsap } from "gsap";
import { CSSRulePlugin } from 'gsap/all';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {
        smooth: true
    },
    smartphone: {
        smooth: true
    }
});

var tl = gsap.timeline();
var tlIntro = gsap.timeline({defaults: {ease: 'power4.inOut', duration: 2}});

// Navigation 

let hamburguer = document.querySelector('.menu__hamburguer');
let header = document.querySelector('header');
let box = document.querySelector('.box');
const tabPanels = document.querySelectorAll('.tab_panel');
const tabBtns = document.querySelectorAll('.tab_btn');

tl.paused(true)
tl.to("header", {x: 0, ease: 'power2'})
tl.to(".header__nav", {opacity: 1, x: 0, stagger: {each: 0.2}, ease: 'power2', delay: 1}, '-=1')
tl.to(".nav__logo", {opacity: 1, x: 0, stagger: .1, ease: 'power2'}, '-=.5')

tlIntro.to(".hero__cta h1", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', y: 0, opacity: 1})
tlIntro.to(".hero__cta span", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', y: 0, opacity: 1}, '-=1.8')
tlIntro.to(".hero__slider", {'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}, '-=1.8')
tlIntro.from(".hero__cta button", { y: 100, opacity: 0, duration: 1}, '-=2')
tlIntro.from(".hero__message p", { opacity: 0, duration: 2}, '-=2')
tlIntro.from(".hero__slider img", { scale: 1.4}, '-=2')

hamburguer.addEventListener('click', (e) => {
    hamburguer.classList.toggle('open')
    header.style.display = 'fixed'
    if (hamburguer.classList.value === 'menu__hamburguer open') {
        tl.play()
    } else (
        tl.reverse()
    )
})

function showPanel(panelIndex) {
    tabBtns.forEach(function(node) { 
        node.classList.remove('active');
    });
    tabBtns[panelIndex].classList.add('active');

    tabPanels.forEach(function(node) {
        node.style.display = 'none';
    });
    tabPanels[panelIndex].style.display = 'block';
}


tabBtns.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        showPanel(index)
    })
})

showPanel(0);
