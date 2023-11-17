/*  filename: complex_code.js
    content: This code generates a complex and sophisticated animation 
             using the HTML5 canvas and JavaScript. It creates a moving 
             colorful spiral pattern with various customization options.
*/

// Canvas setup
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Spiral settings
const center = {
  x: canvas.width / 2,
  y: canvas.height / 2
};
const radiusIncrement = 0.05;
const segmentLength = 7;
const segmentAngleIncrement = (Math.PI * 2) / segmentLength;
const colorPalette = ["#FF0066", "#FF6600", "#00CC99"];
const spiralCount = 10;
const rotationSpeed = 0.001;

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < spiralCount; i++) {
    const spiralRadius = 50 + i * 25;
    const spiralRotationAngle = rotationSpeed * Date.now() * (i + 1);
    const spiralColor = colorPalette[i % colorPalette.length];
    const offsetAngle = i * ((Math.PI * 2) / spiralCount);

    ctx.strokeStyle = spiralColor;
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (let angle = 0; angle < Math.PI * 2; angle += segmentAngleIncrement) {
      const currentRadius = spiralRadius + radiusIncrement * angle;

      const x =
        center.x +
        Math.cos(angle + spiralRotationAngle + offsetAngle) * currentRadius;
      const y =
        center.y +
        Math.sin(angle + spiralRotationAngle + offsetAngle) * currentRadius;

      ctx.lineTo(x, y);
    }

    ctx.stroke();
    ctx.closePath();
  }

  requestAnimationFrame(animate);
}

animate();