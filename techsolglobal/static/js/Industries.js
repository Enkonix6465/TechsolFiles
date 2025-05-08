document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('healthcare-video');
  const playButton = document.getElementById('play-button');
  const videoContainer = document.querySelector('.video-container'); // Video container selector
  
  // Function to check if the video container is visible
  function checkVideoPlay() {
    const rect = videoContainer.getBoundingClientRect(); // Get the position and size of the video container
    const containerTop = rect.top; // Top position of the container
    const containerHeight = rect.height; // Height of the container
    const windowHeight = window.innerHeight; // Viewport height
    
    // If the container is at least 25% visible in the viewport
    if (containerTop + containerHeight * 0.25 <= windowHeight && containerTop + containerHeight * 0.75 >= 0) {
      // Play video if it is paused
      if (video.paused) {
        video.play();
        video.muted = false; // Unmute the video when it starts playing
      }
    } else {
      // Pause video if it's not in the visible section of the screen
      if (!video.paused) {
        video.pause();
        video.currentTime = 0; // Optionally reset video to start
      }
    }
  }

  // When the play button is clicked
  playButton.addEventListener('click', function () {
    video.play(); // Play the video
    video.muted = false; // Unmute the video
    playButton.style.display = 'none'; // Hide the play button
  });

  // Check on scroll and resize events
  window.addEventListener('scroll', checkVideoPlay);
  window.addEventListener('resize', checkVideoPlay);

  // Initial check to see if the video should play when the page loads
  checkVideoPlay();
});
// === 5. Location Hover Section with Reset ===
document.addEventListener('DOMContentLoaded', function () {
  const indiaOption = document.getElementById('india-option');
  const usaOption = document.getElementById('usa-option');
  const ukOption = document.getElementById('uk-option');

  const indiaDetails = document.getElementById('india-details');
  const usaDetails = document.getElementById('usa-details');
  const ukDetails = document.getElementById('uk-details');

  const locationSection = document.getElementById('location-section'); // NEW broo

  let lockedLocation = null; // Track clicked location

  function hideAllDetails() {
    indiaDetails.classList.remove('active');
    usaDetails.classList.remove('active');
    ukDetails.classList.remove('active');
  }

  function showLocationDetails(locationElement) {
    hideAllDetails();
    locationElement.classList.add('active');
  }

  function handleMouseEnter(locationElement) {
    if (!lockedLocation) {
      showLocationDetails(locationElement);
    }
  }

  function handleMouseLeave() {
    if (lockedLocation) {
      showLocationDetails(lockedLocation);
    } else {
      hideAllDetails();
    }
  }

  function handleClick(locationElement) {
    lockedLocation = locationElement;
    showLocationDetails(locationElement);
  }

  // India
  indiaOption.addEventListener('mouseenter', () => handleMouseEnter(indiaDetails));
  indiaOption.addEventListener('mouseleave', handleMouseLeave);
  indiaOption.addEventListener('click', () => handleClick(indiaDetails));

  // USA
  usaOption.addEventListener('mouseenter', () => handleMouseEnter(usaDetails));
  usaOption.addEventListener('mouseleave', handleMouseLeave);
  usaOption.addEventListener('click', () => handleClick(usaDetails));

  // UK
  ukOption.addEventListener('mouseenter', () => handleMouseEnter(ukDetails));
  ukOption.addEventListener('mouseleave', handleMouseLeave);
  ukOption.addEventListener('click', () => handleClick(ukDetails));

  // 🎯 NEW: Reset everything if section is out of view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        lockedLocation = null; // Clear lock
        hideAllDetails(); // Hide all
      }
    });
  }, { threshold: 0.2 }); // Little part visible is enough

  if (locationSection) {
    observer.observe(locationSection);
  }
});
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

