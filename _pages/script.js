// -----------------------------
// Basic JavaScript Exercises
// -----------------------------

// Helper: short getElementById
function $(id) {
  return document.getElementById(id);
}

// Counter state
let counter = 0;

function updateCounter() {
  const counterEl = $("counter");
  if (counterEl) counterEl.textContent = counter;
}

// -----------------------------
// 1pt: Simple Functions
// -----------------------------
function increaseCounter() {
  counter++;
  updateCounter();
}

function decreaseCounter() {
  counter--;
  updateCounter();
}

// -----------------------------
// 1pt: Simple For Loop
// -----------------------------
function runForLoop() {
  const outEl = $("forLoopResult");
  if (!outEl) return;

  const output = [];
  for (let i = 0; i <= counter; i++) {
    output.push(i);
  }
  outEl.textContent = output.join(" ");
}

// -----------------------------
// 1pt: Repetition with Condition
// -----------------------------
function showOddNumbers() {
  const outEl = $("oddResult");
  if (!outEl) return;

  const output = [];
  for (let i = 1; i <= counter; i++) {
    if (i % 2 !== 0) output.push(i);
  }
  outEl.textContent = output.join(" ");
}

// -----------------------------
// 1pt: Arrays
// -----------------------------
function arrayMultiplesOfFive() {
  const arr = [];

  // add every multiple of 5 up to the counter, in reverse order
  for (let i = counter; i >= 5; i--) {
    if (i % 5 === 0) arr.push(i);
  }

  // IMPORTANT: print the array itself (not individual elements)
  console.log(arr);
}

// -----------------------------
// 2pts: Objects and Form Fields
// -----------------------------
function printCarObject() {
  const typeEl = $("carType");
  const mpgEl = $("carMPG");
  const colorEl = $("carColor");
  if (!typeEl || !mpgEl || !colorEl) return;

  const car = {
    cType: typeEl.value,
    cMPG: mpgEl.value,
    cColor: colorEl.value
  };

  console.log(car);
}

// -----------------------------
// 2pts: Objects and Form Fields pt. 2
// -----------------------------
function loadCar(carObj) {
  const typeEl = $("carType");
  const mpgEl = $("carMPG");
  const colorEl = $("carColor");
  if (!typeEl || !mpgEl || !colorEl) return;

  typeEl.value = carObj.cType;
  mpgEl.value = carObj.cMPG;
  colorEl.value = carObj.cColor;
}

// -----------------------------
// 2pt: Changing Styles
// -----------------------------
function changeColor(color) {
  const p = $("colorParagraph");
  if (!p) return;
  p.style.color = color;
}

// -----------------------------
// Wire up buttons AFTER page loads
// (avoids onclick issues and ensures elements exist)
// -----------------------------
window.addEventListener("load", () => {
  updateCounter();

  // Simple Functions
  document.getElementById("btnIncrease")?.addEventListener("click", increaseCounter);
  document.getElementById("btnDecrease")?.addEventListener("click", decreaseCounter);

  // For Loop
  document.getElementById("btnForLoop")?.addEventListener("click", runForLoop);

  // Odd Numbers
  document.getElementById("btnOdds")?.addEventListener("click", showOddNumbers);

  // Arrays
  document.getElementById("btnArray")?.addEventListener("click", arrayMultiplesOfFive);

  // Print Car Object
  document.getElementById("btnPrintCar")?.addEventListener("click", printCarObject);

  // Load Car Objects
  document.getElementById("btnLoad1")?.addEventListener("click", () => loadCar(window.car1));
  document.getElementById("btnLoad2")?.addEventListener("click", () => loadCar(window.car2));
  document.getElementById("btnLoad3")?.addEventListener("click", () => loadCar(window.car3));

  // Color Change Buttons
  document.getElementById("btnRed")?.addEventListener("click", () => changeColor("red"));
  document.getElementById("btnGreen")?.addEventListener("click", () => changeColor("green"));
  document.getElementById("btnBlue")?.addEventListener("click", () => changeColor("blue"));
});
