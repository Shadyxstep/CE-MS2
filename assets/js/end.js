//Declaring Constants
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5; 

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

//Saves score when save button is clicked
saveHighScore = e => {
    e.preventDefault();

    const score = {

    //Sorts scores in order
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score)
    highScores.splice(5); //Only Allows top 5 highscores to be displayed

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign('/CE-MS2/index.html');

};