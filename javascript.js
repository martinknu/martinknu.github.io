// Strict mode applied
"use strict";


// Mouseover big div
function bigImg(x) {
    console.log(`The object is ${x}`);

    const itemInfo =  x.getBoundingClientRect();
    console.log(`The item info ${itemInfo}`);

    let itemHeight = itemInfo.height;
    let itemWidth = itemInfo.width;

    console.log(`The height is ${itemHeight}`);
    console.log(`The width is ${itemWidth}`);

    //x.style.height = itemHeight + 6 + "px"
    //x.style.width = itemWidth + 3 + "px";

    x.style.border = "1px solid darkgray"

}
  
// Mouseover normal div
function normalImg(x) {

    console.log(`The object is ${x}`);

    const itemInfo =  x.getBoundingClientRect();
    console.log(`The item info ${itemInfo}`);

    let itemHeight = itemInfo.height;
    let itemWidth = itemInfo.width;

    console.log(`The height is ${itemHeight}`);
    console.log(`The width is ${itemWidth}`);

    //x.style.height = itemHeight - 6 + "px"
    //x.style.width = itemWidth - 3 + "px";

    x.style.border = "1px solid rgba(255, 255, 255, 0.0)"
}


// Contact me form submit
function contactMeSubmit(e) {
  console.log(`Form Submitted! Time stamp: ${e.timeStamp}`);
  e.preventDefault();
}

contact_form.addEventListener('submit', contactMeSubmit);
