/**Main slider*** */
// Создаем медиа условие, проверяющее viewports на ширину не менее 768 пикселей.
const mediaQuery = window.matchMedia('(max-width: 1520px)')
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let offset = 0;
let sliderInner = document.querySelector('.inner-slider');

console.log(sliderInner.scrollWidth);

next.addEventListener('click', () => {
    let widthSlider = sliderInner.scrollWidth;
    let countElements = sliderInner.children.length;
    offset += widthSlider/countElements;
    let maxOffset;
    if (mediaQuery.matches) {
        maxOffset = widthSlider-(widthSlider/countElements)/2;
        console.log(maxOffset);
    } else {
        maxOffset = widthSlider-3*(widthSlider/countElements);
        console.log('hey')
    }
    //let maxOffset = widthSlider-3*(widthSlider/countElements);
    //console.log(widthSlider/countElements);
    if(offset > maxOffset){
        offset=0;
    }

    sliderInner.style.left = -offset + 'px';
})

prev.addEventListener('click', () => {
    let widthSlider = sliderInner.scrollWidth;
    let countElements = sliderInner.children.length;
    offset -= widthSlider/countElements;
    let maxOffset = widthSlider-3*(widthSlider/countElements);
    console.log(widthSlider);
    if(offset < 0){
        offset=maxOffset;
    }

    sliderInner.style.left = -offset + 'px';
})

/*next.addEventListener('click', ()=>{
    offset += 440;
    if(offset > 1320) {
        offset=0;
    }
    sliderInner.style.left = -offset + 'px';
})

prev.addEventListener('click', ()=>{
    offset -= 440;
    if(offset<0){
        offset=1320;
    }
    sliderInner.style.left = -offset + 'px';
})*/



/**end main slider*/

/*let prev2 = document.querySelector('.scd-prev');
let next2 = document.querySelector('.scd-next');
let quantity = document.querySelector('#slider2').children.length - 1;
let clicks = 0;
let offset2 = 0;
prev2.setAttribute("disabled", "disabled");

next2.addEventListener('click', ()=>{
    offset2+=636;
    document.querySelector('#slider2').style.left = -offset2 + 'px';
    clicks++;
    prev2.removeAttribute('disabled');
    if(clicks == quantity){
        next2.setAttribute("disabled", "disabled");
    } else {
        next2.removeAttribute('disabled');
    }
})

prev2.addEventListener('click', ()=>{
    offset2-=636;
    document.querySelector('#slider2').style.left = -offset2 + 'px';
    clicks--;
    next2.removeAttribute('disabled');
    if(clicks == 0) {
        prev2.setAttribute("disabled", "disabled");
    }
})
*/

/*services*/
/*
let pasting = document.querySelector('#pasting');
let detailing = document.querySelector('#detailing');
let serviceBlock = document.querySelector('#serviceBlock');


pasting.addEventListener('click', () => {
    detailing.classList.remove('active');
    pasting.classList.add('active');
    serviceBlock.style.left = 0 + 'px';
})

detailing.addEventListener('click', () => {
    detailing.classList.add('active');
    pasting.classList.remove('active');
    serviceBlock.style.left = -1296 + 'px';
})*/

/*advantages2*/

/*
let advantages2Prev = document.querySelector('.advantages2-prev');
let advantages2Next = document.querySelector('.advantages2-next');
let advantages2Quantity = document.querySelector('#advantages2-slider').children.length - 1;
let advantages2Clicks = 0;
let advantages2Offset = 0;
advantages2Prev.setAttribute("disabled", "disabled");

advantages2Next.addEventListener('click', ()=>{
    advantages2Offset+=636;
    document.querySelector('#advantages2-slider').style.left = -advantages2Offset + 'px';
    advantages2Clicks++;
    advantages2Prev.removeAttribute('disabled');
    if(advantages2Clicks == advantages2Quantity){
        advantages2Next.setAttribute("disabled", "disabled");
    } else {
        advantages2Next.removeAttribute('disabled');
    }
})

advantages2Prev.addEventListener('click', ()=>{
    advantages2Offset-=636;
    document.querySelector('#advantages2-slider').style.left = -advantages2Offset + 'px';
    advantages2Clicks--;
    advantages2Next.removeAttribute('disabled');
    if(advantages2Clicks == 0) {
        advantages2Prev.setAttribute("disabled", "disabled");
    }
})*/

/***scroll */

let smoothLinks = document.querySelectorAll('.smooth-link');

smoothLinks.forEach((link) =>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        let nameSection = link.dataset.scroll;
        let heightSection = document.querySelector('#'+nameSection).offsetTop-50;
        window.scroll({
            left: 0,
            top: heightSection,
            behavior: 'smooth'
        })
    })
})

/***fixed header***/

let headerH = document.querySelector('header').offsetHeight;

fixedNav();

window.addEventListener('scroll', fixedNav);

function fixedNav(){
    let scrollOffset = window.pageYOffset;
    if(scrollOffset > headerH){
        document.querySelector('nav').classList.add('fixed');
    }else{
        document.querySelector('nav').classList.remove('fixed');
    }
}

/***burger menu***/
let burgerButton = document.querySelector('.burger-menu');
let linksBurgerMenu = document.querySelector('#linksBurgerMenu');
let mobLlinks = document.querySelectorAll('header nav ul li');
let countClicks = 0;


//console.log(burgerButton.children);
burgerButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(countClicks == 0){
        linksBurgerMenu.classList.add('mobile-nav');
        burgerButton.children[0].classList.remove('fa-bars');
        burgerButton.children[0].classList.add('fa-xmark');
        mobLlinks.forEach((link)=>{
            link.style.display = 'block';
        })
        countClicks++;
    } else {
        linksBurgerMenu.classList.remove('mobile-nav');
        burgerButton.children[0].classList.add('fa-bars');
        burgerButton.children[0].classList.remove('fa-xmark');
        mobLlinks.forEach((link)=>{
            link.style.display = 'none';
        })
        countClicks--;
    }
    
})
