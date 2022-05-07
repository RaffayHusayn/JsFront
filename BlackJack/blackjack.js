var messageEl = document.getElementById('message-el'); 
var startGameBtn = document.getElementById('start-game');
var sumEl = document.getElementById('sum-el');
var cardEl = document.getElementById('card-el');

var firstCard = Math.floor(Math.random() * 13);
var secondCard = Math.floor(Math.random() * 13);
var sum = firstCard + secondCard;
var isAlive = true;
var hasBlackjack = false;
var message = "";

 




function startGame(){
    sumEl.textContent = "Sum: " + sum;
    // cardEl.textContent = 
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