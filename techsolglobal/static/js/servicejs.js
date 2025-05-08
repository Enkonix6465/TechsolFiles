<script>
  window.addEventListener('scroll', function () {
    const introSection = document.querySelector('.intro');
    const sectionPosition = introSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      introSection.classList.add('show'); /* Trigger animation when section comes into view */
    }
  });
</script>
