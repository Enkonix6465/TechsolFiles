// servicesjs.js

document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".journey-steps .step");
    let currentIndex = 0;
  
    function highlightNextCard() {
      // Remove glow from all cards first
      steps.forEach(step => {
        step.style.boxShadow = "none";
      });
  
      // Apply gold glow to the current card
      steps[currentIndex].style.boxShadow = "0 0 10px 2px gold";
  
      // Move to next card (loop back if at the end)
      currentIndex = (currentIndex + 1) % steps.length;
    }
  
    // Run immediately and then every 2 seconds
    highlightNextCard();
    setInterval(highlightNextCard, 1800);
  });
  