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
let currentIndex = 0;
const totalImages = 10;
const carouselContainer = document.getElementById("carousel-container");

function slideImages() {
  currentIndex++;
  if (currentIndex >= totalImages) currentIndex = 0;
  const offset = -(currentIndex * (250 + 30));
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

// === 5. Footer Location Popup Section ===


const locationData = {
  India: "235, Binnamangala, 13th Cross Rd, Indiranagar, Bengaluru, Karnataka 560038",
  USA: "250 Vesey St, New York, NY 10281",
  UK: "123 Piccadilly St, London W1J 9HS, United Kingdom",
  Australia: "101 Collins Street, Melbourne VIC 3000, Australia"
};

function openPopup(locationName) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupAddress = document.getElementById("popup-address");

  popupTitle.innerText = locationName;
  popupAddress.innerText = locationData[locationName] || "Address not available.";
  popup.classList.add("active"); // Show popup with blur effect
}

function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const locationItems = document.querySelectorAll(".location-item");

  locationItems.forEach(item => {
    item.addEventListener("click", () => {
      const locationName = item.querySelector("span").innerText;
      openPopup(locationName);
    });
  });

  // Optional: Close popup on outside click
  const popup = document.getElementById("popup");
  popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
  });
});

  document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    let timeout;

    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdown.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.classList.remove('show');
      }, 500); // ⏳ stays for 3 seconds after hover
    });
  });

