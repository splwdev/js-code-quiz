// Query Selectors
var hScores = document.querySelector("#highscores");
var clearButton = document.querySelector("#clear");

var finalScore = localStorage.getItem("highScore");

// runs displayHighScores function
displayHighScores();

// create function to clear highscores table
clearButton.addEventListener("click", function() {
    localStorage.clear();
    hScores.innerHTML = "";
});

// create function to display highscores
function displayHighScores() {
    var highscores = JSON.parse(finalScore);
    // console.log(highscores);

    // loop through high scores
    for (i = 0; i < highscores.length; i++) {
        // sorts high scores in ascending order
        highscores.sort(function(a, b) {
            return b.userScore - a.userScore
        });
        // creates li element
        var li = document.createElement("li");
        // displays the intials and score in format of "initial - score"
        li.textContent = highscores[i].userInitials + " - " + highscores[i].userScore;
        // apppends the li element to the element with the highscores id
        hScores.appendChild(li);
    }
}