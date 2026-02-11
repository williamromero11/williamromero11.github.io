---
permalink: /BJ/
title: "Basic JavaScript"
layout: page
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Basic JavaScript Exercises</title>
</head>
<body>

  <h1>Basic JavaScript Exercises</h1>

  <p>Current Counter: <span id="counter">0</span></p>

  <hr>

  <h2>1pt: Simple Functions</h2>
  <p>
    When the 'increase' button is clicked, increment the counter above.<br>
    When the 'decrease' button is clicked, decrement the counter above.
  </p>

  <button id="btnIncrease">Increase Counter</button>
  <button id="btnDecrease">Decrease Counter</button>

  <hr>

  <h2>1pt: Simple For Loop</h2>
  <p>
    When this button is clicked, display in the designated area below
    every number from 0 up to and including the counter above.
  </p>

  <button id="btnForLoop">Run For Loop</button>
  <p>Result: <span id="forLoopResult"></span></p>

  <hr>

  <h2>1pt: Repetition with Condition</h2>
  <p>
    When this button is clicked, display in the designated area below
    all odd numbers from 1 to the counter above.
  </p>

  <button id="btnOdds">Show Odd Numbers</button>
  <p>Result: <span id="oddResult"></span></p>

  <hr>

  <h2>1pt: Arrays</h2>
  <p>
    When this button is clicked, add every multiple of 5 up to the counter (above)
    to an array in reverse order. Then print the array to console.<br>
    <b>NOTE:</b> print the array itself, not the contents of the array.<br>
    If the number is &lt; 5, then it should print an empty array
  </p>

  <button id="btnArray">Array of Reverse Order Multiples of 5</button>

  <hr>

  <h2>2pts: Objects and Form Fields</h2>

  <label for="carType">Car Type</label><br>
  <input type="text" id="carType"><br><br>

  <label for="carMPG">Car MPG</label><br>
  <input type="text" id="carMPG"><br><br>

  <label for="carColor">Car Color</label><br>
  <input type="text" id="carColor"><br><br>

  <button id="btnPrintCar">Print Car Object</button>

  <hr>

  <h2>2pts: Objects and Form Fields pt. 2</h2>
  <p>
    When either of these buttons are clicked,
    load the data from the car objects found in the footer of this HTML
    into the form above.
  </p>

  <button id="btnLoad1">Load Car 1</button>
  <button id="btnLoad2">Load Car 2</button>
  <button id="btnLoad3">Load Car 3</button>

  <hr>

  <h2>2pt: Changing Styles</h2>
  <p id="colorParagraph">
    When either of these buttons are clicked,
    the text color of this paragraph (and only this paragraph) should change
    to the color described by the button text.
  </p>

  <button id="btnRed">Red</button>
  <button id="btnGreen">Green</button>
  <button id="btnBlue">Blue</button>

  <!-- Footer Car Objects (as described in assignment) -->
  <script>
    // Keep these names: car1, car2, car3 (script.js uses them)
    const car1 = { cType: "truck", cMPG: 28, cColor: "red" };
    const car2 = { cType: "sedan", cMPG: 35, cColor: "blue" };
    const car3 = { cType: "SUV",   cMPG: 22, cColor: "black" };
  </script>

  <!-- Your JS file -->
  <script src="script.js"></script>

</body>
</html>

