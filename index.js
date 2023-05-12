// VARIABLE DECLARATION
let fisrtCard = getRandomNumber();
let secondCard = getRandomNumber();

let sumEL = document.getElementById("sum-el");
let messageEL = document.getElementById("message-el");
let cardsEL = document.getElementById("cards-el");
let hasBlackjack = false;
let isAlive = true;
let message = "";

let sum = fisrtCard + secondCard;
let cards = fisrtCard + " " + secondCard;
let cardo = [fisrtCard, secondCard];

// FUNCTION DECLARATION
function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  return randomNum;
}

function startBtn() {
  renderFn();
}

function renderFn() {
  sumEL.textContent = "Sum: " + sum;
  cardsEL.textContent = "Cards: ";

  for (let x = 0; x < cardo.length; x++) {
    cardsEL.textContent += cardo[x] + " ";
  }

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
  let newCard = getRandomNumber();
  cardo.push(newCard);
  sum += newCard;
  renderFn();
}
