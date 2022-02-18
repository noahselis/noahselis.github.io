"use strict";
$(document).ready(() => {
  function store(pupValue) {

     // add task to web storage
     let items = localStorage.shoppingCart || ""; // "" is default
     localStorage.shoppingCart = items.concat(pupValue, "\n");
     
    // make things expire after 21 days
     let expire = new Date(); // create new date object
     expire.setDate(expire.getDate() + 21); // set the value of that date to be +21 from whatever today is
     localStorage.expiration = expire.toDateString(); // stores the value of the Date object in the local storage object in
    // a property that you've named "expiration"

    // clear task text box and re-display tasks
    $("#item_list").val(localStorage.shoppingCart);

    textbox.focus(); 
  }

  $("#sally").click(() => {
    let buttonValue = $("#sally");
    let pupValue = buttonValue.val();

    store(pupValue);
    display();
  });

  $("#figgs").click(() => {
    let buttonValue = $("#figgs");
    let pupValue = buttonValue.val();

    store(pupValue);
    display();
  });

  $("#trinity").click(() => {
    let buttonValue = $("#figgs");
    let pupValue = buttonValue.val();

    store(pupValue);
    display();
  });

  $("#boxelder").click(() => {
    let buttonValue = $("#boxelder");
    let pupValue = buttonValue.val();

    store(pupValue);
    display();
  });

  $("#johnny").click(() => {
    let buttonValue = $("#johnny");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#cramps").click(() => {
    let buttonValue = $("#cramps");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#scratch").click(() => {
    let buttonValue = $("#scratch");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#snoobs").click(() => {
    let buttonValue = $("#snoobs");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#buttermilk").click(() => {
    let buttonValue = $("#buttermilk");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#baby").click(() => {
    let buttonValue = $("#baby");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#buttocks").click(() => {
    let buttonValue = $("#buttocks");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#elphonso").click(() => {
    let buttonValue = $("#elphonso");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#sweet").click(() => {
    let buttonValue = $("#sweet");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#gootsy").click(() => {
    let buttonValue = $("#gootsy");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#dark").click(() => {
    let buttonValue = $("#dark");
    let pupValue = buttonValue.val();

    store(pupValue);
  });

  $("#slaps").click(() => {
    let buttonValue = $("#slaps");
    let pupValue = buttonValue.val();

    store(pupValue);
  });


  $("#empty_cart").click(() => {
    localStorage.clear();
    localStorage.removeItem("expiration"); // removes expiration item from local storage
    $("#item_list").val("");
    $("#items").focus();
  });

  $("#checkout").click(() => {
    alert(
      "You will be sent a confirmation email shortly along with the contact info and necessary legal documents for the following pups" +
        "\n" +
        localStorage.shoppingCart
    );
  });

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


    // make things expire after 21 days
    // let expire = new Date(); // create new date object
    // expire.setDate(expire.getDate() + 21); // set the value of that date to be +21 from whatever today is
    // localStorage.expiration = expire.toDateString(); // stores the value of the Date object in the local storage object in
    // a property that you've named "expiration"

    // clear task text box and re-display tasks
    //$("#item_list").val(localStorage.shoppingCart);

    //textbox.focus();


    //function display() {
      //   let html = "";
      //   for(var i = 0; i < localStorage.length; ++i) {
      //     // let getValue = localStorage.getItem(sally);
      //     //html += "<p><a href='#'>Delete</a>" + getValue.toString("hello") +  "</p>";
      //     console.log(localStorage.length);
      //   }
      //   $("#item_list").html(html);
    
      //   $("#item_list").find("a").each( (i, a) => {
      //     $(a).click( evt => {
      //         localStorage.removeItem("shoppingCart", i);
      //         display();
      //         evt.preventDefault(); 
      //         console.log(i);
      //     });
      // });
      // }