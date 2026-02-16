"use strict";

/**
 * Helper: get the counter as a number (defaults to 0 if something weird happens)
 */
function getCounterValue() {
  const counterEl = document.getElementById("counter");
  const n = Number(counterEl.textContent);
  return Number.isFinite(n) ? n : 0;
}

/**
 * Helper: set the counter display
 */
function setCounterValue(n) {
  document.getElementById("counter").textContent = String(n);
}

/**
 * 1pt: Simple Functions
 */
function tickUp() {
  const n = getCounterValue();
  setCounterValue(n + 1);
}

function tickDown() {
  const n = getCounterValue();
  setCounterValue(n - 1);
}

/**
 * 1pt: Simple For Loop
 * Display every number from 0 up to and including the counter.
 */
function runForLoop() {
  const n = getCounterValue();
  const out = [];

  for (let i = 0; i <= n; i++) {
    out.push(i);
  }

  document.getElementById("forLoopResult").textContent = out.join(" ");
}

/**
 * 1pt: Repetition with Condition
 * Display all odd numbers from 1 to the counter.
 */
function showOddNumbers() {
  const n = getCounterValue();
  const out = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) out.push(i);
  }

  document.getElementById("oddNumberResult").textContent = out.join(" ");
}

/**
 * 1pt: Arrays
 * Add every multiple of 5 up to the counter to an array in reverse order.
 * Then print the array itself to the console.
 * If counter < 5, print [].
 */
function addMultiplesToArray() {
  const n = getCounterValue();
  const arr = [];

  for (let i = n; i >= 5; i--) {
    if (i % 5 === 0) arr.push(i);
  }

  console.log(arr); // print the array itself
}

/**
 * 2pts: Objects and Form Fields
 * Build an object from the form values and print it to console.
 */
function printCarObject() {
  const car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };

  console.log(car);
}

/**
 * 2pts: Objects and Form Fields pt. 2
 * Load carObject1/2/3 (defined in the HTML footer) into the form.
 */
function loadCar(which) {
  let carObj;

  if (which === 1) carObj = window.carObject1;
  else if (which === 2) carObj = window.carObject2;
  else if (which === 3) carObj = window.carObject3;
  else return;

  // In case something is missing, fail safely
  if (!carObj) return;

  document.getElementById("carType").value = carObj.cType ?? "";
  document.getElementById("carMPG").value = carObj.cMPG ?? "";
  document.getElementById("carColor").value = carObj.cColor ?? "";
}

/**
 * 2pt: Changing Styles
 * Change only the paragraph with id="styleParagraph" to red/green/blue.
 */
function changeColor(which) {
  const p = document.getElementById("styleParagraph");

  if (which === 1) p.style.color = "red";
  else if (which === 2) p.style.color = "green";
  else if (which === 3) p.style.color = "blue";
}
