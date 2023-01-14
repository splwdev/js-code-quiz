// declare any global variables


// on page opening, display user initials and their corresponding score
var user = localStorage.getItem(user);
var lastUserString = JSON.stringify(user);
console.log(lastUserString);
var lastUser = JSON.parse(lastUserString);

// sort high scores from highest score to lowest score


// create function to clear highscores table