import Swiper, {
  Navigation,
  Pagination,
  EffectFade
} from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade]);


const heroSwiper = new Swiper('.hero-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  speed: 1250,
  pagination: {
    el: '.hero__pag',
    clickable: true,
  },
  navigation: {
    nextEl: '.hero-slider__next',
    prevEl: '.hero-slider__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      speed: 1000
    },
    992: {
      speed: 1250
    }
  }
});

const testimonialsSwiper = new Swiper('.testimonials__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1250,
  pagination: {
    el: '.testimonials__pag',
    clickable: true,
  },
  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      speed: 1000
    },
    992: {
      slidesPerView: 2,
      speed: 1250
    }
  }
});

// const charts = document.querySelectorAll('.svg-main');


// console.log(charts);

// for (let i=0; i< charts.length; i++){
//   console.log(`Length ${i+1} is ${Math.ceil(charts[i].getTotalLength())}`)
// }



