// Swiper slider
var swiper = new Swiper('.bg-slider-thumbs', {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 0,
});
var swiper2 = new Swiper('.bg-slider', {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
});

// Javacript for the scroll indicator bar
window.addEventListener('scroll', () => {
  const indicatorBar = document.querySelector('.scroll-indicator-bar');

  const pageScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = (pageScroll / height) * 100;

  indicatorBar.style.width = scrollValue + '%';
});

// Responsive navigation menu toggle
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
  navigation.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});

// ********** fixed navbar ************

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  // setup back to top link

  // if (scrollHeight > 500) {
  //   topLink.classList.add('show-link');
  // } else {
  //   topLink.classList.remove('show-link');
  // }
});

// Cards slider
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
});
