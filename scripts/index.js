import LocomotiveScroll from 'locomotive-scroll';
import { Back, gsap } from "gsap";
import { CSSRulePlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const scroll = new LocomotiveScroll({
    el: document.querySelector('.scrollContainer'),
    smooth: true,
    tablet: {
        smooth: true
    },
    smartphone: {
        smooth: true
    },
    touchMultiplier: 2
});

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scrollContainer", {
  scrollTop(value) {
    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});

let tl = gsap.timeline();
let tlIntro = gsap.timeline({defaults: {ease: 'power4.inOut', duration: 2}});

// Navigation 

let hamburguer = document.querySelector('.menu__hamburguer');
let header = document.querySelector('header');
const tabPanels = document.querySelectorAll('.tab_panel');
const tabBtns = document.querySelectorAll('.tab_btn');

tl.paused(true)
tl.to("header", {x: 0, ease: 'power2'})
tl.to(".header__nav", {opacity: 1, x: 0, stagger: {each: 0.2}, ease: 'power2', delay: 1}, '-=1')
tl.to(".nav__logo", {opacity: 1, x: 0, stagger: .1, ease: 'power2'}, '-=.5')

tlIntro.to(".hero", {'clip-path': 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)', duration: 1.5, ease: 'power2.out'})
tlIntro.to(".hero__cta h1", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', y: 0, opacity: 1}, '-=1.5')
tlIntro.to(".hero__cta span", {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', y: 0, opacity: 1}, '-=1.8')
tlIntro.to(".hero__slider", {'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}, '-=1.8')
tlIntro.to(".hero__cta button", {opacity: 1}, '-=2')
tlIntro.from(".hero__message p", { opacity: 0, duration: 2}, '-=2')
tlIntro.from(".hero__slider img", { scale: 1.4}, '-=2')



gsap.to(".story__imgContainer img", {
    x: "0%",
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".story__imgContainer img",
        start: "top bottom",
    }
});

gsap.to(".story__imgContainer h3", {
    x: "0%",
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".story__imgContainer img",
        start: "top bottom",
    }
});

gsap.to(".story__textContainer h2", {
    'clip-path' : 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".story__textContainer",
        start: "-50px bottom",
    }
});

gsap.to(".tab__container", {
    opacity: 1,
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".tab__container",
        start: "-50px bottom",
    }
});

gsap.to(".location__img", {
    'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".location__imgContainer",
        start: "-50px bottom",
    }
});

gsap.to(".location__infoContainer h2", {
    'clip-path' : 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".location__infoContainer",
        start: "-50px bottom",
    }
});

gsap.to(".location__infoContainer", {
    opacity: 1,
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".location__infoContainer",
        start: "-50px bottom",
    }
});

gsap.to(".gallery h2", {
    'clip-path' : 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".gallery",
        start: "top bottom",
    }
});

gsap.to(".events h2", {
    'clip-path' : 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    opacity: 1,
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".events",
        start: "top bottom",
    }
});

// Gallery items

gsap.to(".gallery__item", {
    'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".gallery__images",
        start: "top bottom",
    },
    stagger: 0.3
});

gsap.to("html", {
    "--timeline" : '100%',
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".timeline",
        start: "top bottom",
    },
});

gsap.to("html", {
    "--timeline-lineWidthRight" : '55px',
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".timeline",
        start: "top bottom",
    },
});

gsap.to("html", {
    "--timeline-lineWidthLeft" : '55px',
    scrollTrigger: {
        scroller: ".scrollContainer",
        trigger: ".timeline",
        start: "top bottom",
    },
});







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
