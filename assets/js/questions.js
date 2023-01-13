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
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c"
    },
    {
        question: "Question 2: Arrays in Javascript can be used to store:",
        choices: ["a. numbers and strings", "b. other arrays ", "c. booleans", "d. all of the above"],
        answer: "d"
    },

    {
        question: "Question 3: The condition in an if / else statement is stored within",
        choices: ["a. quotes", "b. curly brackets", "c. parentheses", "d. square brackets"],
        answer: "c"
    },

    {
        question: "Question 4: String variables are enclosed within ________ when being assigned to variables",
        choices: ["a. commas ", "b. curly brackets", "c. quotes", "d. parentheses"],
        answer: "c"
    },

    {
        question: "Question 5: A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a. Javascript", "b. console.log", "c. terminal/bash", "d. for loops"],
        answer: "b"
    }
];