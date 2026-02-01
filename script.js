let score = 0;

const target = document.getElementById("target");
const scoreText = document.getElementById("score");
const gameOverScreen = document.getElementById("gameOver");
const moreGamesScreen = document.getElementById("moreGames");

function moveTarget(){
  const maxX = window.innerWidth - 80;
  const maxY = window.innerHeight - 140;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY + 60;

  target.style.left = x + "px";
  target.style.top = y + "px";
}

target.addEventListener("click", function(e){
  e.stopPropagation();
  score++;
  scoreText.innerText = "Score: " + score;
  moveTarget();
});

document.body.addEventListener("click", function(){
  gameOverScreen.classList.remove("hidden");
});

function restartGame(){
  score = 0;
  scoreText.innerText = "Score: 0";
  gameOverScreen.classList.add("hidden");
  moveTarget();
}

function shareGame(){
  const text = `I scored ${score} points in Challenge You 🔥
Can you beat my score?

Play now: ${location.href}`;

  if(navigator.share){
    navigator.share({ text });
  } else {
    alert(text);
  }
}

function openMore(){
  moreGamesScreen.classList.remove("hidden");
}

function closeMore(){
  moreGamesScreen.classList.add("hidden");
}

moveTarget();
