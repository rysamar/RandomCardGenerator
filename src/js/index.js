/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const suits = ["hearts", "spades", "clubs", "diamonds"];

function randomIndex(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}
function selectSuit() {
  let top = document.querySelector("#left-suit");
  let bot = document.querySelector("#right-suit");
  let result = randomIndex(suits);
  if (result == "hearts") {
    top.className = "hearts col-4 left-suit";
    bot.className = "hearts-rotate col-4 offset-8 right-suit";
  } else if (result == "spades") {
    top.className = "spades col-4 left-suit";
    bot.className = "spades-rotate col-4 offset-8 right-suit";
  } else if (result == "clubs") {
    top.className = "clubs col-4 left-suit";
    bot.className = "clubs-rotate col-4 offset-8 right-suit";
  } else {
    top.className = "diamonds col-4 left-suit";
    bot.className = "diamonds-rotate col-4 offset-8 right-suit";
  }
}
function selectValue() {
  let mid = document.querySelector("#value");
  let result = randomIndex(values);
  mid.innerHTML = result;
}

function myCard() {
  selectSuit();
  selectValue();
}

let myButton = document.querySelector("#button");

myButton.addEventListener("click", myCard);
