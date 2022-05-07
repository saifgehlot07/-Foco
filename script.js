"use strict";

const counterValue = document.querySelector(".value");
const countIncrease = document.querySelector(".increase");
const countDecrease = document.querySelector(".decrease");

// Counter
let count = 0;

countIncrease.addEventListener("click", function () {
  counterValue.innerHTML = count++ + "$";
});
countDecrease.addEventListener("click", function () {
  counterValue.innerHTML = count-- + "$";
});
