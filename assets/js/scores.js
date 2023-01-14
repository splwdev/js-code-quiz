// Query Selectors
var highscores = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");

// Functions
// Get score
// function getScore() {
//     var finalScore = localStorage.getItem("userScore");
//     if (finalScore == null) { 
//         finScore = 0;
//     }
//     else {
//         finScore = finalScore;;
//     }
// }

// on page opening, display user initials and their corresponding score
// getScore();
var finalScore = localStorage.getItem("userScore");
var lastUserString = JSON.stringify(finalScore);
console.log(lastUserString);
var lastUser = JSON.parse(lastUserString);

// sort high scores from highest score to lowest score


// create function to clear highscores table