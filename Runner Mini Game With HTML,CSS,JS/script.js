var character = document.getElementById("character");
var block = document.getElementById("block");
let displayScore = document.getElementById("score");
let score = 0;

block.style.animation = "none";
character.style.animation = "none";

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

var checkLose = setInterval(function () {
  var characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 25 && blockLeft > 0 && characterTop > 130) {
    block.style.animation = "none";
    character.style.animation = "none";
    alert("You Lose!Try Again...");
    clearInterval(genarateSocore);
  }
}, 10);

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 32) {
    block.style.animation = "";
    character.style.animation = "";
    genarateSocore;
    var genarateSocore = setInterval(showScore, 100);
  }
});

function showScore() {
  score++;
  displayScore.innerText = score;
}
