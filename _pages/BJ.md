---
permalink: /BJ/
title: "Basic JavaScript"
layout: page
---
<!DOCTYPE html>
<html>
<head>
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

<button onclick="increaseCounter()">Increase Counter</button>
<button onclick="decreaseCounter()">Decrease Counter</button>

<hr>

<h2>1pt: Simple For Loop</h2>
<p>
When this button is clicked, display in the designated area below
every number from 0 up to and including the counter above.
</p>

<button onclick="runForLoop()">Run For Loop</button>
<p>Result: <span id="forLoopResult"></span></p>

<hr>

<h2>1pt: Repetition with Condition</h2>
<p>
When this button is clicked, display in the designated area below
all odd numbers from 1 to the counter above.
</p>

<button onclick="showOddNumbers()">Show Odd Numbers</button>
<p>Result: <span id="oddResult"></span></p>

<hr>

<h2>1pt: Arrays</h2>
<p>
When this button is clicked, add every multiple of 5 up to the counter
to an array in reverse order. Then print the array to console.
</p>

<button onclick="arrayMultiplesOfFive()">Array of Reverse Order Multiples of 5</button>

<hr>

<h2>2pts: Objects and Form Fields</h2>

<label>Car Type</label><br>
<input type="text" id="carType"><br><br>

<label>Car MPG</label><br>
<input type="text" id="carMPG"><br><br>

<label>Car Color</label><br>
<input type="text" id="carColor"><br><br>

<button onclick="printCarObject()">Print Car Object</button>

<hr>

<h2>2pts: Objects and Form Fields pt. 2</h2>
<p>
When either of these buttons are clicked,
load the data from the car objects found in the footer of this HTML
into the form above.
</p>

<button onclick="loadCar(car1)">Load Car 1</button>
<button onclick="loadCar(car2)">Load Car 2</button>
<button onclick="loadCar(car3)">Load Car 3</button>

<hr>

<h2>2pt: Changing Styles</h2>
<p id="colorParagraph">
When either of these buttons are clicked,
the text color of this paragraph (and only this paragraph) should change
to the color described by the button text.
</p>

<button onclick="changeColor('red')">Red</button>
<button onclick="changeColor('green')">Green</button>
<button onclick="changeColor('blue')">Blue</button>

<!-- Footer Car Objects -->
<script>
const car1 = { cType: "truck", cMPG: 28, cColor: "red" };
const car2 = { cType: "sedan", cMPG: 35, cColor: "blue" };
const car3 = { cType: "SUV", cMPG: 22, cColor: "black" };
</script>

<!-- Link to external JS file -->
<script src="script.js"></script>

</body>
</html>


