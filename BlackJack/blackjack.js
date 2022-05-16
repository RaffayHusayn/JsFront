let messageEl = document.getElementById('message-el');
let startGameBtn = document.getElementById('start-game');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');
let newCardEl = document.getElementById("new-card");
let playerEl = document.getElementById("player-el");

// Single line arrow function
const customRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min) + min));

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

let sum = 0;
let cards = [];
let isAlive = false;
let hasBlackjack = false;
let message = "";

const player = {
    name: "raffay",
    chips: 45
}
player.age = 12;
player.name = "ayesha";

function startGame() {
    let firstCard = customRandomNumber(2, 11);
    let secondCard = customRandomNumber(2, 11);
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    playerEl.textContent = player.name + " : $" + player.chips + " age : "+ player.age;
    renderGame();
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    // cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
    let cardsTemp = "Cards: ";
    cards.forEach(card => {
        cardsTemp = cardsTemp + " " + card;
    });
    cardEl.textContent = cardsTemp;
    if (sum <= 20) {
        message = "Do you want to play again?"
        startGameBtn.textContent = "Play Again"

    } else if (sum === 21) {
        message = "You have got Blackjack!!";
        hasBlackjack = true;
    } else {
        message = "You are out of the game!!";
        isAlive = false;
    }

    messageEl.textContent = message;

}

function newCard() {
    console.log("is Alive : " + isAlive);
    console.log("has blackjack : " + hasBlackjack);
    if (isAlive === true && hasBlackjack === false) {
        let newCard = customRandomNumber(2, 11);
        cards.push(newCard);
        sum += newCard;
        renderGame();
    } else {
        newCardEl.disabled = true;
        newCardEl.textContent = "Game Over";
    }
}
