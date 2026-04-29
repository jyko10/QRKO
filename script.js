const slides = document.querySelectorAll(".slide");
const startScreen = document.getElementById("startScreen");
const audio = document.getElementById("bgm");
const musicToggle = document.getElementById("musicToggle");
const dday = document.getElementById("dday");

let current = 0;
let started = false;

function updateDday() {
  const startDate = new Date("2025-12-10T00:00:00");
  const today = new Date();
  const diff = today - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  dday.textContent = `D+${days}`;
}

updateDday();

function nextSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

function startExperience() {
  if (started) return;
  started = true;
  startScreen.classList.add("hidden");
  audio.volume = 0.35;
  audio.play().catch(() => {});
  setInterval(nextSlide, 4500);
}

startScreen.addEventListener("click", startExperience);

musicToggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().catch(() => {});
    musicToggle.textContent = "♪";
  } else {
    audio.pause();
    musicToggle.textContent = "×";
  }
});
