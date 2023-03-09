"use strict";
console.log("hello");

const btnReadAll = document.querySelector(".read-all");

const dotP = document.querySelectorAll(".note-unread");

const notsNumber = document.querySelector(".notification-number");

const notBox = document.querySelector(".notification-box");

const notField = document.querySelectorAll(".notification-field");

btnReadAll.addEventListener("click", (e) => {
  e.preventDefault();

  notField.forEach((h) => h.classList.remove("unread-nots"));

  notsNumber.textContent = 0;
  dotP.forEach((d) => d.classList.add("read-nots"));
});
