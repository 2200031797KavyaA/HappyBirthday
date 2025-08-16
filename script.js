/* ✍️ Typewriter Effect */
const typewriterText = `My dearest sis 💕
You’ve always been my partner-in-crime, my cheerleader, 
and my safe place. On your birthday, I just want to remind you 
how much you mean to me. Here’s to more laughter, more memories, 
and endless love. Happy Birthday babyyy sanju talli chitti bujji! 🎂✨`;

let i = 0;
function typeWriter() {
  if (i < typewriterText.length) {
    document.getElementById("typewriter").innerHTML += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // typing speed
  }
}
window.onload = typeWriter;

/* 🔒 Secret Section Unlock */
function unlockSecret() {
  const input = document.getElementById("passcode").value;
  const secretContent = document.getElementById("secret-content");

  // change this passcode if you want!
  const correctCode = "lovebirds";

  if (input === correctCode) {
  secretContent.classList.remove("hidden");
  secretContent.classList.add("unlocked");
} else {
    alert("Wrong passcode, try again 😉");
  }
}

/* 🎆 Fireworks Animation */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = 300; // just for outro section

function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Firework {
  constructor() {
    this.x = random(0, canvas.width);
    this.y = canvas.height;
    this.targetY = random(50, 200);
    this.speed = 2;
    this.color = `hsl(${random(0, 360)}, 100%, 50%)`;
    this.size = 2;
  }
  update() {
    if (this.y > this.targetY) {
      this.y -= this.speed;
    } else {
      // explosion
      for (let i = 0; i < 30; i++) {
        particles.push(new Particle(this.x, this.y, this.color));
      }
      fireworks.splice(fireworks.indexOf(this), 1);
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 2;
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
    this.alpha = 1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 0.02;
    if (this.alpha <= 0) {
      particles.splice(particles.indexOf(this), 1);
    }
  }
  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

let fireworks = [];
let particles = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (Math.random() < 0.05) {
    fireworks.push(new Firework());
  }

  fireworks.forEach(fw => {
    fw.update();
    fw.draw();
  });

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}
animate();