
var randomNo1 = Math.floor(Math.random() * 6 + 1);
var diceImage1 = "images/dice" + randomNo1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", diceImage1);

var randomNo2 = Math.floor(Math.random() * 6 + 1);
var diceImage2 = "images/dice" + randomNo2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceImage2);


if (randomNo1>randomNo2) {
  document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (randomNo2>randomNo1) {
  document.querySelector("h1").innerHTML = "player 2 wins";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
