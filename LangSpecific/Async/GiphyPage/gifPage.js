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