"use strict";
const numContainer = document.querySelector(".number");
const btnNum = document.querySelectorAll(".numbtn");
const submitBotton = document.querySelector(".sub-btn");
const modalContainer = document.querySelector(".modal__container");
const overlay = document.querySelector(".overlay");
let clicked;
submitBotton.addEventListener("click", function (e) {
  if (clicked) {
    modalContainer.classList.remove("hidden");
    overlay.classList.remove("hidden");
    clicked = false;
  }
});
overlay.addEventListener("click", function () {
  modalContainer.classList.add("hidden");
  overlay.classList.add("hidden");
  btnNum.forEach((btn) => (btn.style.background = " rgb(57, 57, 110)"));
});
numContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("numbtn")) {
    e.target.style.background = "rgb(240, 121, 17)";
  }
  clicked = true;
});
