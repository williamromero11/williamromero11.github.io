"use strict";

/* Helpers */
function getCounterValue() {
  const counterEl = document.getElementById("counter");
  const n = Number(counterEl.textContent);
  return Number.isFinite(n) ? n : 0;
}

function setCounterValue(n) {
  document.getElementById("counter").textContent = String(n);
}

/* 1pt: Simple Functions */
function tickUp() {
  setCounterValue(getCounterValue() + 1);
}

function tickDown() {
  setCounterValue(getCounterValue() - 1);
}

/* 1pt: Simple For Loop */
function runForLoop() {
  const n = getCounterValue();
  const out = [];

  for (let i = 0; i <= n; i++) {
    out.push(i);
  }

  document.getElementById("forLoopResult").textContent = out.join(" ");
}

/* 1pt: Repetition with Condition */
function showOddNumbers() {
  const n = getCounterValue();
  const out = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) out.push(i);
  }

  document.getElementById("oddNumberResult").textContent = out.join(" ");
}

/* 1pt: Arrays */
function addMultiplesToArray() {
  const n = getCounterValue();
  const arr = [];

  for (let i = n; i >= 5; i--) {
    if (i % 5 === 0) arr.push(i);
  }

  console.log(arr);
}

/* 2pts: Objects */
function printCarObject() {
  const car = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };

  console.log(car);
}

function loadCar(which) {
  let car;

  if (which === 1) car = window.carObject1;
  if (which === 2) car = window.carObject2;
  if (which === 3) car = window.carObject3;

  if (!car) return;

  document.getElementById("carType").value = car.cType;
  document.getElementById("carMPG").value = car.cMPG;
  document.getElementById("carColor").value = car.cColor;
}

/* 2pt: Changing Styles */
function changeColor(which) {
  const p = document.getElementById("styleParagraph");

  if (which === 1) p.style.color = "red";
  if (which === 2) p.style.color = "green";
  if (which === 3) p.style.color = "blue";
}

