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

// Alweys white navigation
if (window.location.href.indexOf('rink.html') > -1) {
  navbar.classList.add('fixed-nav');
}

// ********** Filtriranje klizališta **********
// get parent element
const sectionCenter = document.querySelector('.section-rink');
const btnContainer = document.querySelector('.btn-container');
// display all items when pdate loads
window.addEventListener('DOMContentLoaded', function () {
  diplayMenuItems(rinkCard);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (rink) {
    return `<article class="menu-item">
          <img src=${rink.img} alt=${rink.title} class="photo" />
          <div class="rink-info">
            <div class="rink-title">
              <h4>${rink.title}</h4>
              <h4>${rink.year}</h4>
            </div>
            <p class="item-text">
              ${rink.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join('');

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = rinkCard.reduce(
    function (values, item) {
      if (!values.includes(item.year)) {
        values.push(item.year);
      }
      return values;
    },
    ['klizališta']
  );
  const yearBtns = categories
    .map(function (year) {
      return `<button type="button" class="filter-btn" data-id=${year}>
          ${year}
        </button>`;
    })
    .join('');

  btnContainer.innerHTML = yearBtns;
  const filterBtns = btnContainer.querySelectorAll('.filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const year = e.currentTarget.dataset.id;
      const yearBtn = rinkCard.filter(function (menuItem) {
        if (menuItem.year === year) {
          return menuItem;
        }
      });
      if (year === 'klizališta') {
        diplayMenuItems(rinkCard);
      } else {
        diplayMenuItems(yearBtn);
      }
    });
  });
}
