const score = JSON.parse(localStorage.getItem("score")) || { wins: 0, loses: 0, draws: 0 };
const moves = ["rock", "paper", "scissor"];


function update() {
   document.querySelector("#Wins").innerHTML = "Wins: " + score.wins;
   document.querySelector("#Loses").innerHTML = "Loses: " + score.loses;
   document.querySelector("#Draws").innerHTML = "Draws: " + score.draws;
   localStorage.setItem("score", JSON.stringify(score));
}

function computerMove() {
   let randomMove = moves[Math.floor(Math.random() * moves.length)];
   return randomMove;
}

function logic(playerMove, computerMove) {
   if (playerMove === computerMove) {
      score.draws++;
      document.querySelector(".result").innerHTML = "Draw!";
   } else if (
      (playerMove === "rock" && computerMove === "scissor") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissor" && computerMove === "paper")
   ) {
      score.wins++;
      document.querySelector(".result").innerHTML = "You win!";
   } else {
      score.loses++;
      document.querySelector(".result").innerHTML = "You lose!";
   }
   update();
}

function playRock() {
   let computerChoice = computerMove();
   document.querySelector(".output")
      .innerHTML = "Computer plays: " + computerChoice.toUpperCase() + " Player plays: ROCK";
   logic("rock", computerChoice);
}

function playPaper() {
   let computerChoice = computerMove();
   document.querySelector(".output")
      .innerHTML = "Computer plays: " + computerChoice.toUpperCase() + " Player plays: PAPER";
   logic("paper", computerChoice);
}

function playScissor() {
   let computerChoice = computerMove();
   document.querySelector(".output")
      .innerHTML = "Computer plays: " + computerChoice.toUpperCase() + " Player plays: SCISSOR";
   logic("scissor", computerChoice);
}

function resetScore() {
   score.wins = 0;
   score.draws = 0;
   score.loses = 0;

   update();
}

localStorage.setItem("score", JSON.stringify(score));