const allNum = document.querySelectorAll(".btt-style");
const numberBtm = document.querySelectorAll(".btt");
const dotBtm = document.querySelector(".calculate");
const input = document.querySelector(".enter-input");
const inputDiv = document.querySelector(".input");
const clear = document.querySelector(".clear-last");
const clearAll = document.querySelector(".clear-all");
let audio = new Audio("/Calculator Typing - Sound Effect.mp3");
const equal = document.querySelector(".calculate");
const btt1 = document.querySelector(".btt1");

// -------------------
function showDisplay(event) {
  let number = event.target.innerText;
  // console.log(number);
  if (input.value == 0 && input.value.length == 1) {
    input.value = number;
  } else if (input.value > 0 && input.value < 1) {
    input.value = 0 + input.value + number;
  } else {
    input.value = input.value + number;
  }
}
function clearLast() {
  x = input.value;
  if (x.length === 1) {
    input.value = 0;
  } else {
    input.value = x.substring(0, x.length - 1);
  }
}
clear.addEventListener("click", clearLast);
function calculate() {
  let result = input.value;
  input.value = eval(result);
}
allNum.forEach((element) => {
  element.addEventListener("click", function () {
    audio.play();
  });
});

// ----------------
numberBtm.forEach((element) => {
  element.addEventListener("click", showDisplay);
});
equal.addEventListener("click", calculate);
// ----------------
function clearAllof() {
  input.value = 0;
}
clearAll.addEventListener("click", clearAllof);
document.addEventListener("keydown", function (Escape) {
  clearAllof();
});
document.addEventListener("keydown", function (enter) {
  calculate();
});
