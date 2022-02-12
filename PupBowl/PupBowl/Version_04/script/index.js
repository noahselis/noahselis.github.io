"use strict";

//JavaScript for module "joke"
const overlay = document.querySelector("#overlay");

document.querySelector("#show-modal-btn").addEventListener("click", () => {
  overlay.style.display = "block";
});

document.querySelector("#close-modal-btn").addEventListener("click", () => {
  overlay.style.display = "none";
});

$(document).ready(() => {
  const date = new Date();  

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  let dateText = (month + 1) + "/" + day + "/" + year + " " + "At " + hours + ":" + minute + " " + seconds;

  $("#now").text(dateText);
});
