window.onload = function(){
let inputElement = document.getElementById("text-el");
let buttonElement = document.getElementById("button-el")

function clicked(){
    console.log("button is pressed from the javascript");
};
buttonElement.addEventListener('click',clicked);
};
