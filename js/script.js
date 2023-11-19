"use strict"

// GSAP Animation

let tl = gsap.timeline();

const main = document.querySelector('.main');

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

tl.fromTo('.ep-3', {y: 0}, {
    scrollTrigger: {
        trigger: '.ep-2',
        start: 'top top',
        end: () => main.offsetWidth,
        scrub: true,
        pin: true
    },
    y: '-100%'
});

tl.fromTo('.ep-4', {scale: 0.05}, {
    scrollTrigger: {
        trigger: '.ep-3',
        start: 'top top',
        end: () => main.offsetHeight,
        scrub: true,
        markers: true,
        pin: true
    },
    scale: 1,
    width: '100%',
    height: '100%',
    translateX: '8.9%'
})


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