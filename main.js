const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')


toggleMenu.addEventListener('click', ()=>{
navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=>{
navMenu.classList.remove('show')
})

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})

const sneaker = document.querySelector(".home__img img");

sneaker.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

sneaker.addEventListener("mouseenter", (e) => {
    
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
   
});


sneaker.addEventListener("mouseleave", (e) => {
    
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
   
});