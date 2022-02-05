"use strict";

// JavaScript for Newsletter Signup
const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  $("#sign_up").addEventListener("click", () => {
    //Get required values the users entered into textboxes
    const firstName = $("#first_name");
    const lastName = $("#last_name");
    const phoneNumber = $("#phone_number");
    const email = $("#email");
    const city = $("#city");
    const state = $("#state");
    const occupation = $("#occupation");
    const productName = $("#product_name");

    //create a Boolean variable to keep track of invalid entries
    let isValid = true;

    //check user entries - add text to error message if invalid
    if (firstName.value == "") {
      firstName.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      firstName.nextElementSibling.textContent = "";
    }

    if (lastName.value == "") {
      lastName.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      lastName.nextElementSibling.textContent = "";
    }

    if (phoneNumber.value == "") {
      phoneNumber.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      phoneNumber.nextElementSibling.textContent = "";
    }

    if (email.value == "") {
      email.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      email.nextElementSibling.textContent = "";
    }

    if (city.value == "") {
      city.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      city.nextElementSibling.textContent = "";
    }

    if (state.value == "") {
      state.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      state.nextElementSibling.textContent = "";
    }

    if (occupation.value == "") {
      occupation.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      occupation.nextElementSibling.textContent = "";
    }

    if (productName.value == "") {
      productName.nextElementSibling.textContent = "This field is required.";
      isValid = false;
    } else {
      productName.nextElementSibling.textContent = "";
    }

    //provided all user entries are entered, submit the form
    if (isValid) {
      $("#newsletter_form").submit();
    }
  });

  //Script to clear the sign up form
  $("#clear_signup_form").addEventListener("click", () => {
    $("#first_name").value = "";
    $("#last_name").value = "";
    $("#phone_number").value = "";
    $("#email").value = "";
    $("#city").value = "";
    $("#state").value = "";
    $("#occupation").value = "";
    $("#product_name").value = "";

    $("#email_1").focus();
  });

  //Eventlistener for the join newsletter button
  $("#join_newsletter").addEventListener("click", () => {
    //get user entries from text fields and turn them into variables
    const email1 = $("#email_1");
    const email2 = $("#email_2");
    const firstName = $("#first_name2");
    const lastName = $("#last_name2");

    //create a Boolean variable to keep track of invalid entries
    let isValid = true;

    //check user entries and update isValid value when wrong information is entered
    if (email1.value == "") {
      email1.nextElementSibling.textContent = "This field is reqired";
      isValid = false;
    } else {
      email1.nextElementSibling.textContent = "";
    }

    if (email2.value == "") {
      email2.nextElementSibling.textContent = "This field is reqired";
      isValid = false;
    } else {
      email2.nextElementSibling.textContent = "";
    }

    if (email1.value != email2.value) {
      email2.nextElementSibling.textContent = "Both emails must match.";
      isValid = false;
    }

    if (firstName.value == "") {
      firstName.nextElementSibling.textContent = "First name is required.";
      isValid = false;
    } else {
      firstName.nextElementSibling.textContent = "";
    }

    if (lastName.value == "") {
      lastName.nextElementSibling.textContent = "Last name is required.";
      isValid = false;
    } else {
      lastName.nextElementSibling.textContent = "";
    }

    if (isValid) {
      $("#email_form").submit();
    }
  });

  
  $("#clear_newsletter_form").addEventListener("click", () => {
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name2").value = "";
    $("#last_name2").value = "";

    $("#email_1").focus();
})


  $("#first_name").focus();
});
