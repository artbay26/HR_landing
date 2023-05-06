let x = document.getElementsByClassName('swiper');

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.reviews__arrow_left',
        prevEl: '.reviews__arrow_right',
    },
});

let swiperHidden = document.querySelector('.reviews__images');
let screenSize;