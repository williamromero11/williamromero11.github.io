---
permalink: /BJ/
title: "Basic JavaScript"
layout: page
---
// -----------------------------
// Global Counter
// -----------------------------
let counter = 0;

// Update counter display
function updateCounter() {
  document.getElementById("counter").textContent = counter;
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
  let output = [];
  for (let i = 0; i <= counter; i++) {
    output.push(i);
  }
  document.getElementById("forLoopResult").textContent = output.join(" ");
}

// -----------------------------
// 1pt: Repetition with Condition
// -----------------------------
function showOddNumbers() {
  let output = [];
  for (let i = 1; i <= counter; i++) {
    if (i % 2 !== 0) {
      output.push(i);
    }
  }
  document.getElementById("oddResult").textContent = output.join(" ");
}

// -----------------------------
// 1pt: Arrays
// -----------------------------
function arrayMultiplesOfFive() {
  let arr = [];

  if (counter >= 5) {
    for (let i = counter; i >= 5; i--) {
      if (i % 5 === 0) {
        arr.push(i);
      }
    }
  }

  // IMPORTANT: print the ARRAY itself
  console.log(arr);
}

// -----------------------------
// 2pts: Objects and Form Fields
// -----------------------------
function printCarObject() {
  const car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };

  console.log(car);
}

// -----------------------------
// 2pts: Objects and Form Fields pt. 2
// Car objects are assumed to be in the HTML footer
// -----------------------------
function loadCar(carObj) {
  document.getElementById("carType").value = carObj.cType;
  document.getElementById("carMPG").value = carObj.cMPG;
  document.getElementById("carColor").value = carObj.cColor;
}

// -----------------------------
// 2pt: Changing Styles
// -----------------------------
function changeColor(color) {
  document.getElementById("colorParagraph").style.color = color;
}

