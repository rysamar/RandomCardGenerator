/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let icons = ["♦", "♥", "♠", "♣"];
let colors = ["Black", "Red"];
let numbers = [
  "A",
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
  "K"
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getElements(icons, colors, numbers) {
  let icon = icons[getRandomInt(0, icons.length - 1)];
  let color = colors[getRandomInt(0, colors.length - 1)];
  let number = numbers[getRandomInt(0, numbers.length - 1)];

  let cardIcon = document.getElementsByClassName("cardIcon");
  cardIcon[0].innerHTML = `<span class="card${color} ">${icon}</span>`;
  cardIcon[1].innerHTML = `<span class="card${color} ">${icon}</span>`;

  let cardText = document.getElementsByClassName("cardText");
  cardText[0].innerHTML = `<span class="card${color} ">${number}</span>`;
}

window.onload = function() {
  getElements(icons, colors, numbers);
};
