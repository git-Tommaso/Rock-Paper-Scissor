let score = {
   wins: 0,
   loses: 0,
   draws: 0
};

function playRock(params) {
   console.log("THe computer plays rock");
   score.wins++;
}

function playPaper(params) {
   console.log("THe computer plays Paper");
   score.wins++;

}

function playScissor(params) {
   console.log("THe computer plays Scissor");
   score.wins++;

}

function resetScore() {
   score.wins = 0;
   score.draws = 0;
   score.loses = 0;

   document.getElementById("Wins").innerText = "Wins: 0";
   document.getElementById("Loses").innerText = "Loses: 0";
   document.getElementById("Draws").innerText = "Draws: 0";

   console.log("Scores have been reset");
}
