const ImageSliderSwiper1 = new Swiper('.second-section__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },
  // loop:true,
  speed: 500,
  allowTouchMove: false,
});

const ImageSliderSwiper2 = new Swiper('.sixth-section__adaptiv-swiper', {
  navigation: {
    nextEl: '.ss-button-next',
    prevEl: '.ss-button-prev',
  },
});

const TextSliderSwiper = new Swiper('.text-swiper', {
  allowTouchMove: false,
  direction: "vertical",
});

ImageSliderSwiper1.controller.control = TextSliderSwiper;


document.querySelector('.slide-1').addEventListener('click', function (e) {
  e.preventDefault();
  ImageSliderSwiper1.slideTo(0, 500);
});

document.querySelector('.slide-2').addEventListener('click', function (e) {
  e.preventDefault();
  ImageSliderSwiper1.slideTo(1, 500);
});

document.querySelector('.slide-3').addEventListener('click', function (e) {
  e.preventDefault();
  ImageSliderSwiper1.slideTo(2, 500);
});




