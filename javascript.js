// Strict mode applied
use_strict


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

    x.style.border = "1px solid royalblue"

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

    x.style.border = "1px solid white"
}