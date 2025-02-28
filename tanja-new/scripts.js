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

// navigation mobile

document.addEventListener('DOMContentLoaded', function() {
  if (window.matchMedia("(max-width: 768px)").matches) { // Adjust the max-width as needed
    const navLinks = document.querySelectorAll('.fixed-nav a');
    const sections = document.querySelectorAll('section'); // Assuming your sections have the <section> tag

    navLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove 'click' class from all nav elements
        navLinks.forEach(navItem => {
          navItem.classList.remove('click');
        });

        // Add 'click' class to the clicked element
        this.classList.add('click');

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = window.innerHeight * 0.07; // 8vh offset

        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
}});