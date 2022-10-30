// Strict mode applied
"use strict";


// Mouseover big div
function bigImg(x) {
    const itemInfo =  x.getBoundingClientRect();

    let itemHeight = itemInfo.height;
    let itemWidth = itemInfo.width;

    x.style.outline = "1px solid rgba(00,73, 177, 1.0)"
    x.style.outlineOffset = "-1px"  
}
  
// Mouseover normal div
function normalImg(x) {

    const itemInfo =  x.getBoundingClientRect();

    let itemHeight = itemInfo.height;
    let itemWidth = itemInfo.width;

    x.style.outline = "1px none darkgray"
    x.style.outlineOffset = "-1px"  
}



