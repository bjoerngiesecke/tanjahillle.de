const acc = document.querySelectorAll(".accordion");
acc.forEach(button => {
  button.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  function onScroll() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) { // Adjust offset as needed
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
});

document.addEventListener('DOMContentLoaded', function() {
const klassisch = document.querySelector('.container-klassisch');
const agil = document.querySelector('.container-agil');

function checkScroll() {
const triggerBottom = window.innerHeight / 5 * 5; // Increase the bottom trigger point
const triggerTop = window.innerHeight / 5 * 0.5; // Decrease the top trigger point

const klassischTop = klassisch.getBoundingClientRect().top;
const agilTop = agil.getBoundingClientRect().top;

if (klassischTop < triggerBottom && klassischTop > triggerTop) {
    klassisch.classList.add('slide-in-left');
} else {
    klassisch.classList.remove('slide-in-left');
}

if (agilTop < triggerBottom && agilTop > triggerTop) {
    agil.classList.add('slide-in-right');
} else {
    agil.classList.remove('slide-in-right');
}
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Initial check in case elements are already in view
});

document.addEventListener('DOMContentLoaded', function() {
const items = document.querySelectorAll('.fly-in');

function checkScroll() {
const triggerBottom = window.innerHeight / 5 * 4;

items.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;

    if (itemTop < triggerBottom) {
        setTimeout(() => {
            item.classList.add('fly-in-visible');
        }, index * 200); // Delay each item by 200ms
    } else {
        item.classList.remove('fly-in-visible');
    }
});
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Initial check in case elements are already in view
});

    //add active class to nav links based on current section
    document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const currentHash = window.location.hash || '#home';
    const activeLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
});

let lastScrollTop = 0;
const nav = document.querySelector('.fixed-nav');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    nav.classList.add('hidden');
  } else {
    // Scrolling up
    nav.classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});