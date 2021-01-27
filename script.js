// Variables that I will need

var time = 60

var button = document.getElementById("start")

var playerScore

var correct = true

var current = 0

var questionEl = document.getElementById("question")
var questionDisplayEl = document.getElementById("questionDisplay")

var choices = document.getElementById("choices")


var timer = document.getElementById("time")

var timerInterval

var options = document.getElementsByClassName("options")

var questions = [
    {
        question: "first question",
        choices: ["one", "two", "three", "answer"],
        answer: "answer"

    },
    {
        question: "second question",
        choices: ["one", "two", "three"],
        answer: "this one"

    },
    {
        question: "third question",
        choices: ["one", "two", "three"],
        answer: "this one"

    },
    {
        question: "fourth question",
        choices: ["one", "two", "three"],
        answer: "this one"

    }

]

//FUNCTIONS I WILL NEED

//a timer to be set after the start button has been clicked-eventListener timerInterval setInterval 
function setTimer() {
    var startTime = 60;



}


function beginQuiz() {

    var landingPage = document.getElementById("main")
    landingPage.setAttribute("class", "hidden")

    questionEl.removeAttribute("class")
    //as the user selects their answers I need 2 things to happen

    timerInterval = setInterval(function () {

        time--
        timer.textContent = time
        if (time <= 0) {
            endQuiz()

        }

    }, 1000)


    timer.textContent = time
    displayQuiz()

}

function buttons() {
    var answer = document.createElement("button")
    answer.textContent = button
    choices.appendChild(answer)




}

function displayQuiz() {
    var currentQuestion = questions[current]
    console.log(currentQuestion.question)
    //for loop goes here
    for (var i = 0; i < currentQuestion.question.length; i++) {

        questionDisplayEl.textContent = currentQuestion.question
        console.log(currentQuestion.question)
    }

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        options[i].textContent = currentQuestion.choices[i]
        console.log(currentQuestion.choices[i])
        console.log(choices)
    }

}



function checkAnswer() {
    // if this value does not equal question [question.answer]


}


function endQuiz() {



}

var startButton = document.getElementById("start")
startButton.onclick = beginQuiz


//function that takes in arr
//add number in arr
//return total

//function that takes is array
//loop thru the arr ? add together?
//return the total

//function that takes in arr
// declare total 
//loop thru arr
//add current # to total 
//return total

//function that takes in arr
// declare total 
//loop thru arr
//declare currentNum
//return total



//HTML???
//need a start button
//timer
//questions
//choices
//clock
//game over screen


//JS

// DATA--Questions



//Global VAriables



//Functions



//Event Listeners



//click start button
//start timer
//display question anf choices
//if answer correct, show next question
//if incorrect, subtract time
// when all questions answered, game over
//when time reaches 0, game over



//click start button
//need to reference start button
//add onClick event


//start timer
//re timer element on DOM
//use set interval to run that timer

//display question and choices
//reference DOM again
//loop thru questions
//display questions of DOM
//loop thur choices
//display each choice on DOM

//check answer against choice
//if answer correct, show next question
//????? 
//if incorrect subtract time
//time = time - 10 seconds


// when all questions answered, game over
//when time reaches 0, game over





