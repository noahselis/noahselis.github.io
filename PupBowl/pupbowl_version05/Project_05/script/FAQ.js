"use strict";

// // the event handler for the click event of each h2 element
// const toggle = evt => {
//     const h2Element = evt.currentTarget;                 // get the clicked h2 element
//     const divElement = h2Element.nextElementSibling;     // get h2's sibling div

//     h2Element.classList.toggle("minus");
//     divElement.classList.toggle("open");

//     evt.preventDefault();   // cancel default action of h2 tag's <a> tag
// };

// document.addEventListener("DOMContentLoaded", () => {
//     // get the h2 tags
//     const h2Elements = document.querySelectorAll(".faq-content-box h2");

//     // attach event handler for each h2 tag
//     for (let h2Element of h2Elements) {
//         h2Element.addEventListener("click", toggle);
//     }
//     // set focus on first h2 tag's <a> tag
//     h2Elements[0].firstChild.focus();
// });

$(document).ready(() => {
  $("#accordion").accordion({
    event: "click",
    heightStyle: "content",
    collapsible: true,
    active: false
  })

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