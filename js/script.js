"use strict"

// Проверка загрузки всех изображений
Promise.all(Array.from(document.images).map(img => {
    if (img.complete)
        return Promise.resolve(img.naturalHeight !== 0);
    return new Promise(resolve => {
        img.addEventListener('load', () => resolve(true));
        img.addEventListener('error', () => resolve(false));
    });
})).then(results => {
    if (results.every(res => res))
        console.log('all images loaded successfully');
    else
        console.log('some images failed to load, all finished loading');
});

// Подключаем библиотеку mobile-detect.js
var md = new MobileDetect(window.navigator.userAgent);

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

    if (!md.mobile()) {
        // Пользователь **не** с мобильного устройства
        gsap.fromTo('.ep-2__text-top', { xPercent: -30 }, {
            scrollTrigger: {
                trigger: '.ep-2',
                start: 'top bottom',
                scrub: true
            },
            xPercent: 10
        });

        gsap.fromTo('.ep-2__text-bottom', { xPercent: 30 }, {
            scrollTrigger: {
                trigger: '.ep-2',
                start: 'top bottom',
                scrub: true
            },
            xPercent: -10
        });
    }



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

    gsap.fromTo('.ep-4', { scale: 0.05 }, {
        scrollTrigger: {
            trigger: '.ep-3',
            start: "top top",
            end: () => main.offsetHeight / 4,
            scrub: true,
            pin: true
        },
        scale: 1.05,
        top: '0',
        left: '0'
    });

    gsap.fromTo('.ep-4__text', { yPercent: 800, opacity: 0 }, {
        scrollTrigger: {
            trigger: '.ep-3',
            start: "top 80%",
            end: () => main.offsetHeight / 4,
            scrub: true
        },
        yPercent: 0,
        opacity: 1
    })

    // tl.fromTo('.ep-4', {opacity: 1}, {
    //     scrollTrigger: {
    //         trigger: '.ep-3',
    //         start: 'top center',
    //         scrub: true
    //     },
    //     opacity: 0
    // });

if(!md.mobile) {
    gsap.fromTo('.cloud-1', { xPercent: -20, yPercent: -20 }, {
        scrollTrigger: {
            trigger: '.ep-5',
            start: 'top center',
            end: () => main.offsetHeight / 3,
            scrub: true,
            markers: true
        },
        xPercent: 35
    });

    gsap.fromTo('.cloud-2', { xPercent: 20 }, {
        scrollTrigger: {
            trigger: '.ep-5',
            start: 'top center',
            end: () => main.offsetHeight / 3,
            scrub: true,
        },
        xPercent: -35
    });

    gsap.fromTo('.ep-6__title', { xPercent: 40 }, {
        scrollTrigger: {
            trigger: '.ep-6',
            start: 'top bottom',

            scrub: true
        },
        xPercent: -20
    });
}
else {
    gsap.fromTo('.cloud-1', { xPercent: 10, yPercent: -20 }, {
        scrollTrigger: {
            trigger: '.ep-5',
            start: 'top 85%',
            
            scrub: true,
        },
        xPercent: -25,
    });

    gsap.fromTo('.cloud-2', { xPercent: -10, yPercent: 90 }, {
        scrollTrigger: {
            trigger: '.ep-5',
            start: 'top 85%',
            
            scrub: true,
        },
        xPercent: 25
    });
}

    

    gsap.fromTo('.ep-6__item-left', { xPercent: -200, yPercent: -270 }, {
        scrollTrigger: {
            trigger: '.ep-6',
            start: 'top 80%',

            scrub: true,

        },
        yPercent: 0
    });
    gsap.fromTo('.ep-6__item-center', { yPercent: -100 }, {
        scrollTrigger: {
            trigger: '.ep-6',
            start: 'top bottom',
            scrub: true,

        },
        yPercent: 140
    });
    gsap.fromTo('.ep-6__item-right', { xPercent: 200, yPercent: -270 }, {
        scrollTrigger: {
            trigger: '.ep-6',
            start: 'top bottom',
            scrub: true,

        },
        yPercent: 120
    });

    if (!md.mobile()) {
        gsap.fromTo('.ep-7__box', { scale: 1, height: '90%' }, {
            scrollTrigger: {
                trigger: '.ep-7',
                start: 'top 15%',
                scrub: true,
            },
            scale: '0.15',
            width: '23%',
            height: '120%',
            top: '49vh',
            right: '37vh'
        });
        gsap.fromTo('.ep-7__box span', { opacity: 1 }, {
            scrollTrigger: {
                trigger: '.ep-7',
                start: 'top 15%',
                scrub: true,
            },
            opacity: 0
        });
        gsap.fromTo('.ep-8__split-pic-1', { yPercent: 100 }, {
            scrollTrigger: {
                trigger: '.ep-8__title',
                start: 'top 20%',
                scrub: true,
            },
            yPercent: 0
        });
        gsap.fromTo('.ep-8__split-pic-2', { yPercent: 100 }, {
            scrollTrigger: {
                trigger: '.ep-8__title',
                start: 'top 10%',
                scrub: true,
            },
            yPercent: 0
        });
        gsap.fromTo('.ep-8__split-pic-3', { yPercent: 100 }, {
            scrollTrigger: {
                trigger: '.ep-8__title',
                start: 'top',
                scrub: true,
            },
            yPercent: 0
        });
        gsap.fromTo('.father-block__text', {yPercent: -50, opacity: 0}, {
            scrollTrigger: {
                trigger: '.ep-8__father-ep',
                start: 'top bottom',
                scrub: true,
            },
            opacity: 1,
            yPercent: 10
        });
        gsap.fromTo('.mother-block__text', {yPercent: -50, opacity: 0}, {
            scrollTrigger: {
                trigger: '.ep-8__mother-ep',
                start: 'top bottom',
                scrub: true
            },
            opacity: 1,
            yPercent: 10
        });

    }
    else {
        const element = document.querySelector('.ep-8__title');
        if (element) {
            element.innerHTML = 'Николай Вавилов родился <span>25 ноября 1887 года</span>в Москве в семье купца. С детства проявлял любопытство к природе, проводя часы в саду, изучая растения';
        } else {
            console.error('.ep-8__title не найден.');
        }
    }

    

    gsap.fromTo('.ep-9__title', { xPercent: 40 }, {
        scrollTrigger: {
            trigger: '.ep-9',
            start: 'top bottom',
            scrub: true
        },
        xPercent: -20
    });

    gsap.fromTo('.ep-9__item-left', { xPercent: -200, yPercent: -270 }, {
        scrollTrigger: {
            trigger: '.ep-9',
            start: 'top 80%',
            scrub: true,
        },
        yPercent: 0
    });

    gsap.fromTo('.ep-9__item-right', { xPercent: 200, yPercent: -270 }, {
        scrollTrigger: {
            trigger: '.ep-9',
            start: 'top bottom',
            scrub: true,
        },
        yPercent: 120
    });

    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);

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