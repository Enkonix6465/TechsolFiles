<script>
  const text = "Driving Digital Transformation with Excellence";
  const typedText = document.getElementById("typed-text");
  let index = 0;

  function typeItOut() {
    if (index < text.length) {
      typedText.textContent += text.charAt(index);
      index++;
      setTimeout(typeItOut, 80);
    } else {
      typedText.style.borderRight = 'none';
    }
  }

  window.addEventListener('DOMContentLoaded', typeItOut);
</script>
