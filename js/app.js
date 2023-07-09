let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let offset = 0;
let sliderInner = document.querySelector('.inner-slider');

next.addEventListener('click', ()=>{
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
})

let prev2 = document.querySelector('.scd-prev');
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

/*services*/
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
})