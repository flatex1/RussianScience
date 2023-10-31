let tl = gsap.timeline();

tl.from('.header', {opacity: 0, duration: 2})
.from('.hero', {opacity: 0, duration: 0.7}, "-=1.7");