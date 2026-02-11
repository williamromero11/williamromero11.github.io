// Counter variable
let counter = 0;

// Helper function to update counter display
function updateCounter() {
  document.getElementById("counter").textContent = counter;
}

// 1pt: Simple Functions
document.getElementById("btnIncrease").addEventListener("click", function() {
  counter++;
  updateCounter();
});

document.getElementById("btnDecrease").addEventListener("click", function() {
  counter--;
  updateCounter();
});

// 1pt: Simple For Loop
document.getElementById("btnForLoop").addEventListener("click", function() {
  let result = "";
  for (let i = 0; i <= counter; i++) {
    result += i + " ";
  }
  document.getElementById("forLoopResult").textContent = result.trim();
});

// 1pt: Repetition with Condition
document.getElementById("btnOdds").addEventListener("click", function() {
  let result = "";
  for (let i = 1; i <= counter; i++) {
    if (i % 2 !== 0) {
      result += i + " ";
    }
  }
  document.getElementById("oddResult").textContent = result.trim();
});

// 1pt: Arrays
document.getElementById("btnArray").addEventListener("click", function() {
  let multiplesArray = [];
  
  if (counter >= 5) {
    for (let i = counter; i >= 5; i--) {
      if (i % 5 === 0) {
        multiplesArray.push(i);
      }
    }
  }
  
  console.log(multiplesArray);
});

// 2pts: Objects and Form Fields
document.getElementById("btnPrintCar").addEventListener("click", function() {
  let carObject = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };
  
  console.log(carObject);
});

// 2pts: Objects and Form Fields pt. 2
document.getElementById("btnLoad1").addEventListener("click", function() {
  loadCarData(window.car1);
});

document.getElementById("btnLoad2").addEventListener("click", function() {
  loadCarData(window.car2);
});

document.getElementById("btnLoad3").addEventListener("click", function() {
  loadCarData(window.car3);
});

function loadCarData(car) {
  document.getElementById("carType").value = car.cType;
  document.getElementById("carMPG").value = car.cMPG;
  document.getElementById("carColor").value = car.cColor;
}

// 2pt: Changing Styles
document.getElementById("btnRed").addEventListener("click", function() {
  document.getElementById("colorParagraph").style.color = "red";
});

document.getElementById("btnGreen").addEventListener("click", function() {
  document.getElementById("colorParagraph").style.color = "green";
});

document.getElementById("btnBlue").addEventListener("click", function() {
  document.getElementById("colorParagraph").style.color = "blue";
});
