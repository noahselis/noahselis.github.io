"use strict";

// helper function determining valid date
const isDate = (date, datePattern) => {
  if (!datePattern.test(date)) {
    return false;
  }

  const dateParts = date.split("/");
  const month = parseInt(dateParts[0]);
  const day = parseInt(dateParts[1]);

  if (month < 1 || month > 12) {
    return false;
  }
  if (day > 31) {
    return false;
  }
  return true;
};

$(document).ready(() => {
  $("#sign_up").click(() => {
    //Get required values the users entered into textboxes
    const firstName = $("#first_name").val();
    const lastName = $("#last_name").val();
    const phoneNumber = $("#phone_number").val();
    const dob = $("#dob").val();
    const email = $("#email").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const occupation = $("#occupation").val();
    const productName = $("#product_name").val();

    // RegEx for validity testing
    const firstNamePattern = /[a-z'-]/;
    const lastNamePattern = /[a-z'-]/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
    const emailPattern = /^[\w\.-]+@[\w\.\-]+\.[a-zA-Z]+$/;

    //create a Boolean variable to keep track of invalid entries
    let isValid = true;

    //check user entries - add text to error message if invalid
    if (firstName === "" || !firstNamePattern.test(firstName)) {
      $("#first_name").next().text("This field is required.");
      isValid = false;
    } else {
      $("#first_name").next().text("");
    }

    if (lastName === "" || !lastNamePattern.test(lastName)) {
      $("#last_name").next().text("This field is required.");
      isValid = false;
    } else {
      $("#last_name").next().text("");
    }

    if (phoneNumber === "" || !phonePattern.test(phoneNumber)) {
      $("#phone_number")
        .next()
        .text("Please enter a phone number in NNN-NNN-NNNN format.");
      isValid = false;
    } else {
      $("#phone_number").next().text("");
    }

    if (dob === "" || !isDate(dob, datePattern)) {
      $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
      isValid = false;
    } else {
      $("#dob").next().text("");
    }

    if (email === "" || !emailPattern.test(email)) {
      $("#email").next().text("Please enter a valid email.");
      isValid = false;
    } else {
      $("#email").next().text("");
    }

    if (city === "") {
      $("#city").next().text("This field is required.");
      isValid = false;
    } else {
      $("#city").next().text("");
    }

    if (state === "") {
      $("#state").next().text("This field is required.");
      isValid = false;
    } else {
      $("#state").next().text("");
    }

    if (occupation === "") {
      $("#occupation").next().text("This field is required.");
      isValid = false;
    } else {
      $("#occupation").next().text("");
    }

    if (productName === "") {
      $("#product_name").next().text("This field is required.");
      isValid = false;
    } else {
      $("#product_name").next().text("");
    }

    //provided all user entries are entered, submit the form
    if (isValid) {
      $("#newsletter_form").submit();
    }
  });

  //Script to clear the sign up form
  $("#clear_signup_form").click(() => {
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
