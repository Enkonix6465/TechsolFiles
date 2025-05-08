document.getElementById("jobAppForm").addEventListener("submit", function (e) {
  e.preventDefault();  // prevent default form submit

  const form = this;
  const formData = new FormData(form);
  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;

  fetch(window.location.href, {
    method: "POST",
    body: formData,
    headers: {
      "X-CSRFToken": csrfToken
      // Note: DO NOT set "Content-Type" when sending FormData — browser will set it automatically.
    },
  })
  .then(res => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.text();  // Response is HTML
  })
  .then(response => {
    // Replace form content with success message
    const formContainer = document.querySelector(".form-container");
    formContainer.innerHTML = `
      <h2>✅ Application Submitted Successfully!</h2>
      <p>Thank you for applying. Redirecting to Careers page...</p>
    `;

    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = "/careers/";  // Update if your careers page URL is different
    }, 3000);
  })
  .catch(err => {
    alert("Something went wrong. Please try again.");
    console.error("Submit error:", err);
  });
});

// Set the 'Applying For' field
document.addEventListener('DOMContentLoaded', function() {
  const jobRoleInput = document.getElementById('jobRole');
  const roleFromURL = getQueryParam('role');
  if (roleFromURL && jobRoleInput) {
    jobRoleInput.value = decodeURIComponent(roleFromURL);
  }
});

// Function to get URL parameter
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
