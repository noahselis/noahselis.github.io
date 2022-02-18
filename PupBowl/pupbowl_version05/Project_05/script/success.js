"use strict";

// // script for the slideshow on the success page

// const $ = selector => document.querySelector(selector);
    
// const imageCache = [];
// let imageCounter = 0;
// let timer = null;
// let image = null;

// const mainImage = $("#main_image");   // the img element for the show
// const caption = $("#caption");        // the h2 element for the caption

// const runSlideShow = () => {
//     imageCounter = (imageCounter + 1) % imageCache.length;
//     image = imageCache[imageCounter];
//     mainImage.src = image.src;
//     mainImage.alt = image.alt;
//     caption.textContent = image.alt;
// };
         
// document.addEventListener("DOMContentLoaded", () => {
//     const links = $("#image_list").querySelectorAll("a");
    
//     // process image links
//     for ( let link of links ) {
//         // Preload image and copy title properties
//         image = new Image();
//         image.src = link.href;
//         image.alt = link.title;

//         // add image to array 
//         imageCache[imageCache.length] = image;
//     }

//     // attach start and pause event handlers
//     $("#start_button").addEventListener("click", () => {
//         runSlideShow();
//         timer = setInterval(runSlideShow, 3000);
//         $("#start_button").disabled = true;
//         $("#pause").disabled = false;
//     });
//     $("#stop_button").addEventListener("click", () => {
//         clearInterval(timer);
//         $("#start_button").disabled = false;
//         $("#stop_button").disabled = true;
//     });
// });

/***************jQuery Translation of code above***************/

"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
    
    // the function for running the slide show    
    const runSlideShow = () => {           
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            () => {        
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt"); 
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);                    
                $("#caption").text(nextCaption).fadeIn(1000);
            }
        );  // end fadeOut() method
    };      // end runSlideShow() arrow function
    
    // start slide show
    let timer1 = setInterval(runSlideShow, 3000);
    
    // starting and stopping the slide show
    $("#slideshow_button").click( () => {
        if (timer1 != null) {
            clearInterval(timer1);                    // stop
            timer1 = null;
        }
        else {
            runSlideShow();                           // start immediately
            timer1 = setInterval(runSlideShow, 3000); // change every 3 secs
        }
    });
});