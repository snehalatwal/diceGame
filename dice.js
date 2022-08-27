// Random number will be genrated between 1-6 for Image one(player 1)
var randomNumber1=Math.floor(Math.random()*6)+1;
// images/dice1.png-images/dice6.png
var randomImage="images/dice"+ randomNumber1 + ".png";
// It will change the image according to the random number for player one
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

// Random number will be genrated between 1-6 for Image two(player 2)
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice" + randomNumber2 + ".png";
// It will change the image according to the random number for player two
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

// compare the dices of two players and announce the winners
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins 🎈";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🎉";
}
else{
  document.querySelector("h1").innerHTML="Draw ⚡";
}
