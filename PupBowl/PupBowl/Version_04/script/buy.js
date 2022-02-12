"use strict";

$(document).ready(() => {
  $(".addToCartButton").click(() => {
    let buttonValue = $(".addToCartButton");
    let pupValue = buttonValue.val();

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
  });

  $("#empty_cart").click(() => {
    localStorage.removeItem("shoppingCart");
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
});
