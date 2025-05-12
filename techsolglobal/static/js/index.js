console.log("Website loaded ✅");

// === 1. mv-cards animation ===
const mvCards = document.querySelectorAll('.mv-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.2 });
mvCards.forEach(card => observer.observe(card));

// === 2. Auto Carousel (Image Slide) ===
let currentIndex = totalImages - 1; // Start from the last image
const totalImages = 10;
const carouselContainer = document.getElementById("carousel-container");

function slideImages() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = totalImages - 1; // Loop back to the end
  const offset = -(currentIndex * (250 + 30)); // Assuming 250px width + 30px gap
  carouselContainer.style.transform = `translateX(${offset}px)`;
}

setInterval(slideImages, 5000);
slideImages(); // Initial load

// === 3. Manual Carousel ===
const carouselSlide = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let manualCounter = 0;

function updateCarousel() {
  const size = slides[0].clientWidth;
  carouselSlide.style.transform = `translateX(-${size * manualCounter}px)`;
}

if (nextBtn && prevBtn && slides.length > 0) {
  nextBtn.addEventListener('click', () => {
    manualCounter = (manualCounter + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    manualCounter = (manualCounter - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  setInterval(() => {
    manualCounter = (manualCounter + 1) % slides.length;
    updateCarousel();
  }, 5000);
}

// === 4. Counter with + Symbol ===
const statsSection = document.querySelector('.why-choose-us');
const counters = document.querySelectorAll('.counter');

const runCounters = () => {
  counters.forEach(counter => {
    counter.innerText = '0'; // Reset
    const target = +counter.getAttribute('data-target');

    const updateCount = () => {
      const count = +counter.innerText.replace('+', '');
      const speed = 30;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = `${target}+`; // Add plus here 👈
      }
    };

    updateCount();
  });
};

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounters(); // Re-run on each intersection
    }
  });
}, { threshold: 0.4 });

if (statsSection) {
  statsObserver.observe(statsSection);
}

