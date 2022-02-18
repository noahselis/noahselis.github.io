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
  const day = date.getDate();
  let hours = date.getHours();
  const minute = date.getMinutes();

  if (hours >= 13) {
    hours -= 12;
  }

  let dateText =
    month +
    1 +
    "/" +
    day.toString().padStart(2, "0") +
    "/" +
    year +
    " " +
    hours.toString().padStart(2, "0") +
    ":" +
    minute.toString().padStart(2, "0")

  $("#now").text(dateText);

  //Eventlistener for the join newsletter button
  $("#join_newsletter").click(() => {
    //Get required values the users entered into textboxes
    const firstName2 = $("#first_name2").val();
    const lastName2 = $("#last_name2").val();
    const email1 = $("#email_1").val();
    const email2 = $("#email_2").val();

    // RegEx for validity testing
    const firstNamePattern = /[a-z'-]/;
    const lastNamePattern = /[a-z'-]/;
    const emailPattern = /^[\w\.-]+@[\w\.\-]+\.[a-zA-Z]+$/;

    //create a Boolean variable to keep track of invalid entries
    let isValid = true;

    //check user entries and update isValid value when wrong information is entered
    if (email1 === "" || !emailPattern.test(email1)) {
      $("#email_1").next().text("Please enter a valid email.");
      isValid = false;
    } else {
      $("#email_1").next().text("");
    }

    if (email2 === "" || !emailPattern.test(email2)) {
      $("#email_2").next().text("Please enter a valid email.");
      isValid = false;
    } else {
      $("#email_2").next().text("");
    }

    if (email1 != email2) {
      $("#email_2").next().text("Both emails must match");
      isValid = false;
    }

    if (firstName2 === "" || !firstNamePattern.test(firstName2)) {
      $("#first_name2").next().text("This field is required.");
      isValid = false;
    } else {
      $("#first_name2").next().text("");
    }

    if (lastName2 === "" || !lastNamePattern.test(lastName2)) {
      $("#last_name2").next().text("This field is required.");
      isValid = false;
    } else {
      $("#last_name2").next().text("");
    }

    if (isValid) {
      $("#email_form").submit();
    }
  });

  $("#clear_newsletter_form").click( () => {
    $("#email_1").val("");
    $("#email_2").val("");
    $("#first_name2").val("");
    $("#last_name2").val("");

    $("#email_1").focus();
  });

  $("#first_name").focus();
});
