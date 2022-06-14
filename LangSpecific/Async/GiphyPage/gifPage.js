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

function getImage(){
    let imageObj = {};
    let imagePromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let randomWord = gifKeys[randomNumber(max)];
            let imageUrl = gifDictionary[randomWord];
            console.log(randomWord);
            console.log(gifDictionary[randomWord]);
            if((randomWord != "") && imageUrl != ""){
                imageObj.word = randomWord;
                imageObj.image = gifDictionary[randomWord];
                resolve(imageObj);
            }else{
                reject("there was an error");
            }
        }, 2000);
    });
    return imagePromise;
}

window.onload = function(){
    let body = document.body;
    let imageEl = document.getElementById("img-el");
    let headingEl = document.getElementById("heading-el");
    let reloadBtn = document.getElementById("reload-btn");
    reloadBtn.addEventListener("click", reload);



    function reload(){
        getImage()
        .then((imageObj)=>{
            headingEl.textContent = imageObj.word;
            imageEl.src = imageObj.image;
        })
        .catch(err => console.log(err));
    };

    
};