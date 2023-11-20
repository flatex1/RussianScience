"use strict"

// GSAP Animation

window.onload = function () {

let tl = gsap.timeline();

const main = document.querySelector('.main');
const ep6 = document.querySelector('.ep-6');

tl.fromTo(
    '.header',
    {
        y: -100,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 1
    });

gsap.fromTo('.ep-2__text-top', {xPercent: -30}, {
    scrollTrigger: {
        trigger:'.ep-2',
        start: 'top bottom',
        scrub: true
    },
    xPercent: 10
});

gsap.fromTo('.ep-2__text-bottom', {xPercent: 30}, {
    scrollTrigger: {
        trigger:'.ep-2',       
        start: 'top bottom',
        scrub: true
    },
    xPercent: -10
});

// gsap.fromTo('.ep-3', {y: 0}, {
//     scrollTrigger: {
//         trigger: '.ep-2',
//         start: 'top top',
//         end: () => main.offsetWidth,
//         scrub: true,
//         pin: true
//     },
//     y: '-100%'
// });

gsap.fromTo('.ep-4', {scale: 0.05}, {
    scrollTrigger: {
        trigger: '.ep-3',
        start: "top",
        end: () => main.offsetHeight,
        scrub: true,    
        pin: true
    },
    scale: 1,
    width: '100%',
    height: '100%',
    translateX: '8.9%'
});

// tl.fromTo('.ep-4', {opacity: 1}, {
//     scrollTrigger: {
//         trigger: '.ep-3',
//         start: 'top center',
//         scrub: true
//     },
//     opacity: 0
// });

gsap.fromTo('.cloud-1', {xPercent: -20, yPercent: -20}, {
    scrollTrigger: {
        trigger: '.ep-5',
        start: 'top center',
        end: () => main.offsetHeight,
        scrub: true,
    },
    xPercent: 35
});

gsap.fromTo('.cloud-2', {xPercent: 20}, {
    scrollTrigger: {
        trigger: '.ep-5',
        start: 'top center',
        end: () => main.offsetHeight,
        scrub: true,
    },
    xPercent: -35
});

gsap.fromTo('.ep-6__title', {xPercent: 40}, {
    scrollTrigger: {
        trigger: '.ep-6',
        start: 'top bottom',
        
        scrub: true
    },
    xPercent: -20
});

gsap.fromTo('.ep-6__item-left', {xPercent: -200, yPercent:-270}, {
    scrollTrigger: {
        trigger:'.ep-6',
        start: 'top 80%',
        
        scrub: true,

    },
    yPercent: 0
});
gsap.fromTo('.ep-6__item-center', {yPercent:-100}, {
    scrollTrigger: {
        trigger:'.ep-6',
        start: 'top bottom',
        
        scrub: true,
        
    },
    yPercent: 140
});
gsap.fromTo('.ep-6__item-right', {xPercent: 200, yPercent:-270}, {
    scrollTrigger: {
        trigger:'.ep-6',
        start: 'top bottom',
        
        scrub: true,
        
    },
    yPercent: 120
});

};
// JavaScript Parallax
/*
window.onload = function () {
    const parallax = document.querySelector('.parallax-images');

    if (parallax) {
        const content = document.querySelector('.section-1');
        const firstItem = document.querySelector('.parallax-images__item-first');
        const secondItem = document.querySelector('.parallax-images__item-second');
        const thirdItem = document.querySelector('.parallax-images__item-third');

        // коэффициенты для параллакса
        const forFirstItem = 55;
        const forSecondItem = 70;
        const forThirdItem = 25;

        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            // передача стилей
            firstItem.style.cssText = `transform: translate(${positionX / forFirstItem}%, ${positionY / forFirstItem}%);`;
            secondItem.style.cssText = `transform: translate(${positionX / forSecondItem}%, ${positionY / forSecondItem}%);`;
            thirdItem.style.cssText = `transform: translate(${positionX / forThirdItem}%, ${positionY / forThirdItem}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {
            // получаем ширину и высоту блока
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            // ноль по середине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
    }


};

*/