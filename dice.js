
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var image1src = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", image1src);


//Code for the second dice6


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // need 6 digits and added 1 so the count does not start at 0

var image2src = "images/dice" +randomNumber2 + ".png"; // The whole whole src code in one vareable

document.querySelectorAll("img")[1].setAttribute("src", image2src);// Select all img tags then indicate which one we want, set the src tag to the new value we generated


if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Win!";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 Win!";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
