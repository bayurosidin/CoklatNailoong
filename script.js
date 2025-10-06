// efek partikel lembut seperti cahaya kecil
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speedY: Math.random() * 0.3 + 0.1,
    opacity: Math.random() * 0.6 + 0.4,
  };
}

for (let i = 0; i < 70; i++) {
  particles.push(createParticle());
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    p.y += p.speedY;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  drawParticles();
  requestAnimationFrame(animate);
}
animate();
