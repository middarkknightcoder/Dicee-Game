var player1Name = prompt("Enter your name");
var player2Name = prompt("Enter your name");

document.querySelectorAll("h2")[0].innerHTML = player1Name;
document.querySelectorAll("h2")[1].innerHTML = player2Name;

document.querySelector("button").addEventListener("onclick" ,reloadPage());

function reloadPage() {
    
var randomNumber = Math.random() * 6;
var player1 = Math.floor(randomNumber) + 1;


var randomNumber = Math.random() * 6;
var player2 = Math.floor(randomNumber) + 1;

document.querySelectorAll("img")[0].setAttribute("src", "/images/dice" + player1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "/images/dice" + player2 + ".png");



if (player1 > player2) {
    
    document.querySelector("h1").innerHTML = "🚩Player1 Win!";

} else if (player1 < player2) {
    
    document.querySelector("h1").innerHTML = "Player2 Win!🚩";

}else {
    
    document.querySelector("h1").innerHTML = "Draw Match";
    
    }
    
}

