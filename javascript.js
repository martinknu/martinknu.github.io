// Strict mode applied
"use strict";

/*
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
*/

// AJAX Asyncronous Javascript and XML
// Simplest way to send data from a server and get data from a server.
// It is super light weight

// Get HTML elements 
//const divName = document.getElementById("name");
//const divHomeworld = document.getElementById("homeworld");
//const divPictures = document.getElementById("pictures");


// Event listener for button
document.getElementById("request_prices").addEventListener("click", 
function(){ 
    // Query string
    const queryString = `https://api.energidataservice.dk/dataset/ElectricityProdex5MinRealtime?offset=0&sort=Minutes5UTC%20DESC`  // `https://swapi.dev/api/people/${randomNum}/`   
    // AJAX Fetch
    fetch(queryString)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Write to HTML elements 
        //divName.innerHTML = data["name"];
        //divHomeworld.innerHTML = data["homeworld"];
        //divPictures.innerHTML = data["films"]
    })

});
