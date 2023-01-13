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

// Element creation
var olChoices = document.createElement("ol");
choices.appendChild(olChoices);
var lineBreak = document.createElement("hr");
choices.appendChild(lineBreak);
var answer = document.createElement("p")
answer.setAttribute("id", "answer");
answer.setAttribute("class", "hide");
choices.appendChild(answer);

// Other variables
var timeLeft = 60;
var index = 0;
var score = 0;

// Functions
// Startgame function
function startGame() { 
  // sets startScreen element to hidden through adding a hide class
  startScreen.setAttribute("class", "hide");
  // remove the hide class from the questions element
  questions.removeAttribute("class");
  // calls the timer function
  startTimer();
  // calls the showQuestion function
  showQuestion();
}

// Timer function
function startTimer() { 
  // sets the display for the timer class to equal the timeLeft variable (60 secs)
  timer.textContent = timeLeft;
  // goes through and kicks off a countdown from 60 secs to 0 secs
  timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    // if the player runs out of time, it clears the time interval and then calls the end game function
    if(timeLeft === 0) {
      clearInterval(timeInterval);
      endGame();
    }
    // TO DO: add condition if player answers all questions before time runs out
  }, 1000);
};

// Endgame function
function endGame() {
  // TODO: add endgame function
};

// Question function
function showQuestion() {
  // shows the question in the question-title element
  questionTitle.textContent = questionSource[index].question;
  // looping through creating buttons for the answer choices and setting attributes
  for (i = 0; i < questionSource[index].choices.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("id", "button" + i);
    choiceBtn.textContent = questionSource[index].choices[i];
    // appends the buttons to the choices element based on the number of choices
    olChoices.appendChild(choiceBtn);
  }
}

// Check answer function
function checkAnswer(event) { 
  event.preventDefault();
  var answer = document.querySelector("#answer");
  answer.setAttribute("class", "");

  var chosenAnswer = event.target.textContent;
  console.log(chosenAnswer);
  var correctAnswer = questionSource[index].answer;
  
  for (i = 0; i < questionSource[index].answer.length; i++) {
    if (correctAnswer === chosenAnswer) {
      score++;
      answer.textContent = "Correct!";
    } else {
      answer.textContent = "Wrong!";
    }
  }
  index += 1;
  if (index < questionSource.length) {
    removeButton();
    showQuestion();
  } else {
    endGame();
  }
}

// remove button function
function removeButton() {
  for (i = 0; i < questionSource[index].choices.length; i++) {
    var choiceBtn = document.getElementById("button" + i);
    choiceBtn.parentNode.removeChild(choiceBtn);
  }
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

}// Event Listeners
// add event listener for on start
startButton.addEventListener("click", startGame);
// choiceBtn.addEventListener("click", checkAnswer);
choices.addEventListener("click", checkAnswer);

