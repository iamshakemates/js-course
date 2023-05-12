// VARIABLE DECLARATION
let fisrtCard = 1;
let secondCard = 2;

let sumEL = document.getElementById("sum-el");
let messageEL = document.getElementById("message-el");
let cardsEL = document.getElementById("cards-el");
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = fisrtCard + secondCard;
let cards = fisrtCard + " " + secondCard;

// FUNCTION DECLARATION
function startBtn() {
  renderFn();
}

function renderFn() {
  sumEL.textContent = "Sum: " + sum;
  cardsEL.textContent = "Cards: " + cards;

  if (sum < 21) {
    message = "Draw new card?";
  } else if (sum === 21) {
    message = "You've got blackjack";
    hasBlackjack = true;
    console.log(hasBlackjack);
  } else {
    message = "You're out of the game";
  }
  messageEL.textContent = message;
}

function newBtn() {
  let newCard = 18;
  cards = cards + " " + newCard;
  sum += newCard;
  renderFn();
}
