document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var tanja = document.querySelector(".tanja");
    var navbar = document.getElementById("navbar");
  
    var isNavbarVisible = false;
  
    function showNavbar() {
      navbar.style.opacity = "1";
      isNavbarVisible = true;
    }
  
    function hideNavbar() {
      navbar.style.opacity = "0";
      isNavbarVisible = false;
    }
  
    function handleScroll() {
      var currentScrollPos = window.pageYOffset;
  
      if (currentScrollPos === 0) {
        // Show the navbar when at the top of the website
        showNavbar();
      } else {
        // Hide the navbar when scrolling
        hideNavbar();
      }
    }
  
    window.onscroll = handleScroll;
  
    header.addEventListener("mouseover", function () {
      if (!isNavbarVisible) {
        showNavbar();
      }
    });
  
    header.addEventListener("mouseout", function (e) {
      // Check if the mouse is actually leaving the header
      if (!e.relatedTarget || !header.contains(e.relatedTarget)) {
        if (!isNavbarVisible) {
          hideNavbar();
        }
      }
    });
  
    // Smooth scrolling for anchor links
    var anchorLinks = document.querySelectorAll('#navbar a[href^="#"]');
    anchorLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        var targetId = this.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Call handleScroll once to set the initial state
    handleScroll();
  });  