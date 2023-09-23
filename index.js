
var menu = document.querySelector(".menu");

var dropdown = document.querySelector(".dropdown");

var close = document.querySelector(".close-icon");

var bg = document.querySelector(".container");

var navbar= document.querySelector("#navbar");

menu.addEventListener('click', () => {
    
    dropdown.classList.add("hidden");
    bg.style.backgroundColor=  "hsl(236, 13%, 42%, 0.4)";
    navbar.style.backgroundColor=  "hsl(236, 13%, 42%, 0.4)";

    
    close.addEventListener('click', () => {

        dropdown.classList.remove("hidden");
        bg.style.backgroundColor=  "white";
        navbar.style.backgroundColor=  "white";

    })

});