const gifDictionary={
    "killua" : "Gifs/killua-gif.gif",
    "sasuke" : "Gifs/sasuke-gif.gif",
    "yourname" : "Gifs/your-name-gif.gif"
}

const gifKeys = ["killua", "sasuke", "yourname"];

function randomNumber(max){
    let num = Math.floor(Math.random() * (max + 1)) ;
    return num;
    console.log(num);
}

const max = gifKeys.length -1;

window.onload = function(){
    let body = document.body;
    let imageEl = document.getElementById("img-el");
    let headingEl = document.getElementById("heading-el");
    console.log(imageEl);
    let randomWord = gifKeys[randomNumber(max)];
    headingEl.textContent = randomWord;
    imageEl.src = gifDictionary[randomWord];
};