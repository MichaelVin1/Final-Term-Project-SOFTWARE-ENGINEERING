let container = document.querySelector("#container");
let horse = document.querySelector("#horse");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

// declaring variable for score
let interval = null;
let playerScore = 0;

//funtion for score
let scoreCounter = () => {
playerScore++;
score.innerHTML = Score <b>${playerScore}</b>;
}

//Start Game
//interval = setInterval(scoreCounter, 200);
window.addEventListener("keydown", (start) => {
// console.log(start);
if (start.code == "Space") {
gameOver.style.display = "none";
block.classList.add("blockActive");
road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

    //score
    let playerScore = 0;
    interval = setInterval(scoreCounter, 200);
}
});

// Jump Your Character
window.addEventListener("keydown", (e) => {
// console.log(e);
if (e.key == "ArrowUp")
if (horse.classList != "horseActive") {
horse.classList.add("horseActive");
// remove class after 0.5 seconds
setTimeout(() => {
horse.classList.remove("horseActive");
}, 500);
}
});

// 'Game Over' if 'Character' hit the 'Block'
let result = setInterval(() => {
let horseBottom = parseInt(getComputedStyle(horse).getPropertyValue("bottom"));
// console.log ("horseBottom" + horsebottom)

let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
// console.log ("BlockLeft" + blockLeft)
if (horseBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
// console.log("GAME OVER")

    gameOver.style.display = "block";
    block.classList.remove("blockActive");
    road.firstElementChild.style.animation = "none";
    cloud.firstElementChild.style.animation = "none";
    clearInterval(interval);
    playerScore = 0;
}
}, 10);
