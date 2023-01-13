// Global variables
// Query selectors
var timer = document.querySelector(".timer");
var time = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");


// Other variables
var timeLeft = 60;

// Functions
// Startgame function
function startGame() { 
  startScreen.style.display = "none";
  questions.style.display = "block";
  startTimer();
  showQuestion();
}

// Timer function
function startTimer() { 
  timer.textContent = timeLeft;
  timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if(timeLeft === 0) {
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
};

// Endgame function
function endGame() {
  
};

// Question function
function showQuestion() {
  for (i = 0; i < questions.children.length; i++) {
    choices.appendChild(questions.children[i]);
  }
}

// Check answer function
function checkAnswer(event) { 
  event.preventDefault();

}

// Obtain score function
function getScore() {

}

// Display score function
function displayScore() { 

}

// Add score to local storage function
function addScore() { 

}

// Submit score function
function submitScore() { 

}

// add event listener / timer for questions
// display questions


// when question is answered display if correct or wrong
// if question is wrong subtract time from clock


// display new question set


// if timer = 0 or all questions answered, game is over


// display score and allow player to submit initials

// Event Listeners
// add event listener for on start
startButton.addEventListener("click", startGame);

// add event listener for answer

// add event listener for submitting score

// 