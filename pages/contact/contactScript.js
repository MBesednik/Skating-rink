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

  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// Send mail
const personName = document.getElementById('name');
const personEmail = document.getElementById('email');
const personMessage = document.getElementById('message');
const submitForm = document.getElementsByClassName('form')[0];

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Clicked');

  // Email body
  let eBody = `
<b>Ime i prezime: </b>${personName.value}
<br>
<b>Email: </b>${personEmail.value}
<br>
`;

  // Smtpjs
  Email.send({
    SecureToken: '13ee4bdb-e917-48d9-9bf4-640026cfb727',
    To: 'm.besednik69@gmail.com',
    From: 'm.besednik69@gmail.com',
    Subject: 'Test',
    Body: eBody,
  }).then((message) => alert(message));
});
