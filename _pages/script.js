"use strict";

// -----------------------------
// Global Counter
// -----------------------------
let counter = 0;

// Safe element getter (prevents crashes if an ID is missing)
function $(id) {
  const el = document.getElementById(id);
  if (!el) {
    console.error(`Missing element with id="${id}"`);
  }
  return el;
}

function updateCounter() {
  const counterEl = $("counter");
  if (!counterEl) return;
  counterEl.textContent = counter;
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
window.addEventListener("DOMContentLoaded", () => {
  // Initialize counter display
  updateCounter();

  // Simple functions
  $("btnIncrease")?.addEventListener("click", increaseCounter);
  $("btnDecrease")?.addEventListener("click", decreaseCounter);

  // Loops
  $("btnForLoop")?.addEventListener("click", runForLoop);
  $("btnOdds")?.addEventListener("click", showOddNumbers);

  // Arrays
  $("btnArray")?.addEventListener("click", arrayMultiplesOfFive);

  // Car object printing
  $("btnPrintCar")?.addEventListener("click", printCarObject);

  // Car loading (car1/car2/car3 are defined in the HTML footer script)
  $("btnLoad1")?.addEventListener("click", () => loadCar(window.car1));
  $("btnLoad2")?.addEventListener("click", () => loadCar(window.car2));
  $("btnLoad3")?.addEventListener("click", () => loadCar(window.car3));

  // Color change
  $("btnRed")?.addEventListener("click", () => changeColor("red"));
  $("btnGreen")?.addEventListener("click", () => changeColor("green"));
  $("btnBlue")?.addEventListener("click", () => changeColor("blue"));
});
