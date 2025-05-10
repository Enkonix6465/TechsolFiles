// DOM elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.getElementById('mainNavbar');
const navLinks = document.querySelectorAll('.navbar a');

// Function to toggle mobile nav visibility (show/hide on screen size)
function toggleNavbarVisibility() {
  if (window.innerWidth < 1024) {
    navbar.style.display = "block"; // show on mobile
  } else {
    navbar.style.display = "none";  // hide on desktop
    navbar.classList.remove('active'); // also make sure menu isn't open
  }
}

// Handle hamburger click
hamburgerMenu.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent body click from closing it
  navbar.classList.toggle('active');
});

// Close menu on nav link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

// Close if clicked outside
document.body.addEventListener('click', (e) => {
  if (navbar.classList.contains('active') &&
      !navbar.contains(e.target) &&
      !hamburgerMenu.contains(e.target)) {
    navbar.classList.remove('active');
  }
});

// Run on load & resize
window.addEventListener('load', toggleNavbarVisibility);
window.addEventListener('resize', toggleNavbarVisibility);
