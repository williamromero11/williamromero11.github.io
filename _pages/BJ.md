---
permalink: /BJ/
title: "Basic JavaScript"
layout: page
---

# Basic JavaScript Exercises

<p>Current Counter: <span id="counter">0</span></p>

<hr>

## 1pt: Simple Functions
<p>
  When the 'increase' button is clicked, increment the counter above.<br>
  When the 'decrease' button is clicked, decrement the counter above.
</p>
<button id="btnIncrease">Increase Counter</button>
<button id="btnDecrease">Decrease Counter</button>

<hr>

## 1pt: Simple For Loop
<p>
  When this button is clicked, display in the designated area below
  every number from 0 up to and including the counter above.
</p>
<button id="btnForLoop">Run For Loop</button>
<p>Result: <span id="forLoopResult"></span></p>

<hr>

## 1pt: Repetition with Condition
<p>
  When this button is clicked, display in the designated area below
  all odd numbers from 1 to the counter above.
</p>
<button id="btnOdds">Show Odd Numbers</button>
<p>Result: <span id="oddResult"></span></p>

<hr>

## 1pt: Arrays
<p>
  When this button is clicked, add every multiple of 5 up to the counter (above)
  to an array in reverse order. Then print the array to console.<br>
  NOTE: print the array itself, not the contents of the array.<br>
  If the number is &lt; 5, then it should print an empty array
</p>
<button id="btnArray">Array of Reverse Order Multiples of 5</button>

<hr>

## 2pts: Objects and Form Fields
<label>Car Type</label><br>
<input type="text" id="carType"><br><br>

<label>Car MPG</label><br>
<input type="text" id="carMPG"><br><br>

<label>Car Color</label><br>
<input type="text" id="carColor"><br><br>

<button id="btnPrintCar">Print Car Object</button>

<hr>

## 2pts: Objects and Form Fields pt. 2
<p>
  When either of these buttons are clicked,
  load the data from the car objects found in the footer of this HTML
  into the form above.
</p>
<button id="btnLoad1">Load Car 1</button>
<button id="btnLoad2">Load Car 2</button>
<button id="btnLoad3">Load Car 3</button>

<hr>

## 2pt: Changing Styles
<p id="colorParagraph">
  When either of these buttons are clicked,
  the text color of this paragraph (and only this paragraph) should change
  to the color described by the button text.
</p>
<button id="btnRed">Red</button>
<button id="btnGreen">Green</button>
<button id="btnBlue">Blue</button>

<script>
  // footer car objects
  window.car1 = { cType: "truck", cMPG: 28, cColor: "red" };
  window.car2 = { cType: "sedan", cMPG: 35, cColor: "blue" };
  window.car3 = { cType: "SUV",   cMPG: 22, cColor: "black" };
</script>

<script src="{{ '/script.js' | relative_url }}"></script>

