"use strict";

let cards = [];
let sum = 0;
let hasBlackjack = false; //has the user got blackjack?
let isStillInGame = false; //has the user lost?
let message = "";
let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");
let playerEl = document.getElementById("player");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
//assign function for button to start the game
function startGame() {
  isStillInGame = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  playGame();
}

//loop cards array
function playGame() {
  cardsEl.textContent = `Cards in Hand: `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = `Sum: ${sum}`;

  //if statement for messages
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!!";
    messageEl.style.color = "#1c6e45";
    messageEl.style.fontSize = "70px";
    messageEl.style.textShadow = "2px 2px 4px #090e0c";
    hasBlackjack = true;
  } else {
    message = "Sorry, you're out of the game!";
    isStillInGame = false;
  }
  messageEl.textContent = message;
}

//function for new card that is drawn
function drawCard() {
  if (isStillInGame === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    playGame();
  }
}

let bank = {
  name: "Bank",
  chips: 200,
};

playerEl.textContent = `${bank.name}: $${bank.chips}`;

//crtl + d to highlight everything with the same name

/*Things to still do:
- add comma between number array
- display cards(?)
- change winning green font to go back to original*/
