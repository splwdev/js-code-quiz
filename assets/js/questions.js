// For questions have an array of objects with the following structure:
// {
//   question: string,
//   choices: array,
//   answer: string
// }
// Questions copied from gif in readme file

const questionSource = [
    {
        question: "Question 1: Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "Question 2: Arrays in Javascript can be used to store:",
        choices: ["numbers and strings", "other arrays ", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        question: "Question 3: The condition in an if / else statement is stored within",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },

    {
        question: "Question 4: String variables are enclosed within ________ when being assigned to variables",
        choices: ["commas ", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },

    {
        question: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "console.log", "terminal/bash", "for loops"],
        answer: "console.log"
    }
];