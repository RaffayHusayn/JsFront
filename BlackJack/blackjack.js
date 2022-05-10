let messageEl = document.getElementById('message-el'); 
let startGameBtn = document.getElementById('start-game');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');

// Single line arrow function
const customRandomNumber = (min, max)=>(Math.floor(Math.random() * (max - min) + min));

/*
Same Function written in different ways:
1. Regular function:
function customRandomNumber(min, max){
    return (min, max)=>(Math.floor(Math.random() * (max - min) + min));
}

2. Arrow function without implicit return:
const customRandomNumber = (min, max)=>{
    return (min, max)=>(Math.floor(Math.random() * (max - min) + min));
}
*/


let firstCard = customRandomNumber(2 , 11);
let secondCard = customRandomNumber(2 , 11);
let sum = firstCard + secondCard;
let isAlive = true;
let hasBlackjack = false;
let message = "";

function startGame(){
    renderGame();
}


function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
    if(sum <= 20){
        message = "Do you want to play again?"
        startGameBtn.textContent = "Play Again"

    }else if(sum === 21){
        message = "You have got Blackjack!!";
        hasBlackjack = true;
    }else{
        message = "You are out of the game!!";
        isAlive = false;
    }

    messageEl.textContent = message;

}

function newCard(){
    let newCard = customRandomNumber(2, 11);
    console.log(newCard);
    sum +=newCard;
    renderGame();
}
