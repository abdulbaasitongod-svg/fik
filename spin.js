const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const rewards = [
  0, 10, 30, 50, 70, 100, 150, 200, 1000
];

const colors = [
  "#ef4444", "#f97316", "#facc15",
  "#4ade80", "#22d3ee", "#3b82f6",
  "#8b5cf6", "#ec4899", "#14b8a6"
];

const slices = rewards.length;
const sliceAngle = (2 * Math.PI) / slices;

let angle = 0;
let spinning = false;

let spinsLeft = localStorage.getItem("spinsLeft") || 3;
let balance = localStorage.getItem("balance") || 0;

document.getElementById("spinsLeft").textContent = spinsLeft;
document.getElementById("balance").textContent = balance;

function drawWheel() {
  for (let i = 0; i < slices; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(160, 160);
    ctx.arc(160, 160, 150, angle + i * sliceAngle, angle + (i + 1) * sliceAngle);
    ctx.fill();

    ctx.save();
    ctx.translate(160, 160);
    ctx.rotate(angle + (i + 0.5) * sliceAngle);
    ctx.fillStyle = "#000";
    ctx.font = "bold 14px Arial";
    ctx.fillText(rewards[i] + " FC", 70, 5);
    ctx.restore();
  }
}

drawWheel();

document.getElementById("spinBtn").onclick = () => {
  if (spinning || spinsLeft <= 0) return;

  spinsLeft--;
  localStorage.setItem("spinsLeft", spinsLeft);
  document.getElementById("spinsLeft").textContent = spinsLeft;

  spinning = true;

  let spinAngle = Math.random() * 5000 + 3000;
  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    angle = spinAngle * Math.exp(-0.002 * progress);

    ctx.clearRect(0, 0, 320, 320);
    drawWheel();

    if (progress < 4000) {
      requestAnimationFrame(animate);
    } else {
      spinning = false;
      rewardPlayer();
    }
  }

  requestAnimationFrame(animate);
};

function rewardPlayer() {
  let normalizedAngle = (2 * Math.PI - (angle % (2 * Math.PI))) % (2 * Math.PI);
  let index = Math.floor(normalizedAngle / sliceAngle);

  let reward = rewards[index];

  balance = parseInt(balance) + reward;
  localStorage.setItem("balance", balance);

  document.getElementById("balance").textContent = balance;

  alert(reward === 0 ? "😢 No reward this time" : `🎉 You won ${reward} FC`);
}
