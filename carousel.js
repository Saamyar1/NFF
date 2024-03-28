// ------------------------------------------------ JS for carousel---------------------------
'use strict';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
const carouselNavItems = Array.from(document.querySelectorAll('.nav-item'));
const CAROUSEL_SIZE = carouselItems.length;

leftBtn.addEventListener('click', swipe);
rightBtn.addEventListener('click', swipe);

for (var i = 0; i < carouselNavItems.length; ++i) {
    carouselNavItems[i].addEventListener('click', navBtnSelect)
}

function swipe(e) {
    const currentCarouselItem = document.querySelector('.carousel-item.active');

    const currentIndex = carouselItems.indexOf(currentCarouselItem);

    let nextIndex;

    if(e.currentTarget.classList.contains('left'))
        nextIndex = currentIndex === 0 ? CAROUSEL_SIZE - 1 : currentIndex - 1;
    else
        nextIndex = currentIndex === CAROUSEL_SIZE - 1 ? 0 : currentIndex + 1;

    carouselItems[nextIndex].classList.add('active');
    carouselNavItems[nextIndex].classList.add('active');
    currentCarouselItem.classList.remove('active');
    carouselNavItems[currentIndex].classList.remove('active');
}

function navBtnSelect(f) {
    const target = f.target;
    const index = carouselNavItems.indexOf(target);
    
    const currentActiveCarouselItem = document.querySelector('.carousel-item.active');
    const currentActiveNavItem = document.querySelector('.nav-item.active');

    if(target.classList.contains('active')) {
        return;
    }
    else {
        currentActiveCarouselItem.classList.remove('active');
        currentActiveNavItem.classList.remove('active');

        target.classList.add('active');
        carouselItems[index].classList.add('active');
    }
}