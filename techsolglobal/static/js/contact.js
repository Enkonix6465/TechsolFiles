<script>
const canvas = document.getElementById('liquidCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;

function draw() {
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < 150; i++) {
    const x = Math.sin(i * 0.02 + time) * 100 + w / 2;
    const y = i * 8 + (Math.cos(time + i * 0.03) * 20);

    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${50 + i}, 100%, 50%)`; // gold hue
    ctx.fill();
  }

  time += 0.015;
  requestAnimationFrame(draw);
}

draw();
</script>
