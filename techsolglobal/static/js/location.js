// === 5. Footer Location Popup Section ===

// This function will open the popup with the correct address passed manually
function openPopup(locationName, address) {
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupAddress = document.getElementById("popup-address");

  // Set the location name and address in the popup
  popupTitle.innerText = locationName;
  popupAddress.innerText = address;

  // Show the popup
  popup.classList.add("active");
}

// Close the popup
function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

// Event Listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Add click event listener to each location item
  const locationItems = document.querySelectorAll(".location-item");

  locationItems.forEach(item => {
    item.addEventListener("click", () => {
      // Get the location name and address from the clicked element
      const locationName = item.querySelector("span").innerText;
      const address = item.querySelector("p").innerText; // Grabbing the address text from the <p> tag
      
      // Open the popup with the details
      openPopup(locationName, address);
    });
  });
});
