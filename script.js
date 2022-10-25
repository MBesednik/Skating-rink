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
const homePageBtn = document.querySelector('.homePageBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const serviceBtn = document.querySelector('.serviceBtn');
const rinkBtn = document.querySelector('.rinkBtn');
const mediaBtn = document.querySelector('.mediaBtn');
const contactBtn = document.querySelector('.contactBtn');

menuBtn.addEventListener('click', () => {
  navigation.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});
homePageBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});
aboutBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});
serviceBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});
rinkBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});
mediaBtn.addEventListener('click', () => {
  navigation.classList.remove('active');
});
contactBtn.addEventListener('click', () => {
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

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
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

// Images container
let bigImg = document.getElementById('big-img');
let smallImg = document.getElementsByClassName('small-img');
smallImg[0].onclick = function () {
  bigImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  bigImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  bigImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  bigImg.src = smallImg[3].src;
};

let secondBigImg = document.getElementById('second-big-img');
let secondSmallImg = document.getElementsByClassName('second-small-img');
secondSmallImg[0].onclick = function () {
  secondBigImg.src = secondSmallImg[0].src;
};
secondSmallImg[1].onclick = function () {
  secondBigImg.src = secondSmallImg[1].src;
};
secondSmallImg[2].onclick = function () {
  secondBigImg.src = secondSmallImg[2].src;
};
secondSmallImg[3].onclick = function () {
  secondBigImg.src = secondSmallImg[3].src;
};

let thirdBigImg = document.getElementById('third-big-img');
let thirdSmallImg = document.getElementsByClassName('third-small-img');
thirdSmallImg[0].onclick = function () {
  thirdBigImg.src = thirdSmallImg[0].src;
};
thirdSmallImg[1].onclick = function () {
  thirdBigImg.src = thirdSmallImg[1].src;
};
thirdSmallImg[2].onclick = function () {
  thirdBigImg.src = thirdSmallImg[2].src;
};
thirdSmallImg[3].onclick = function () {
  thirdBigImg.src = thirdSmallImg[3].src;
};
