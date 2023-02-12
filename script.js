const startButton = document.getElementById("startbtn");
const qButton = document.querySelectorAll(".questionbtn");
const questionContainer = document.getElementById("quizcontainer");
const question = document.getElementById("questionbox");
const questionTime =document.getElementById("timerbox")



let currentQuestion = 0;





//array for questions
const questions = [
   {
    question: "What is JavaScript used for in web development?",
    answers: [ {text: "Creating dynamic and interactive websites", correct: true },
        {text: "Designing the layout and style of a website", correct: false },
        {text: "Implementing server-side logic", correct: false },
        {text: "Storing data on a website", correct: false } ]
    },

   {
    question: "What is a variable in JavaScript?",
    answers: [ {text: "A set of instructions for a specific task", correct: false },
        {text: "A type of loop in JavaScript", correct: false },
        {text: "A value that can be changed", correct: false },
        {text: "A named container that holds data", correct: true }, ]
    }, 

   {
    question: "How do you declare a variable in JavaScript?",
    answers: [ {text: "function variableName;", correct: false },
        {text: "const variableName;", correct: false },
        {text: "var variableName;", correct: true },
        {text: "let variableName;", correct: false }, ]
    },

    {
    question: "What is the difference between let and var in JavaScript?",
    answers: [ {text: "var is only used for constants, while let can be changed", correct: false },
        {text: "let is only used for constants, while var can be changed", correct: false },
        {text: "A value that can be changed", correct: false },
        {text: "let is block-scoped, while var is function-scoped", correct: true }, ]
    },

    {
     question: "What is an array in JavaScript?",
     answers: [ {text: "A function used to perform a specific task", correct: false },
        {text: "A data structure that holds a collection of values", correct: true},
        {text: "A type of loop in JavaScript", correct: false },
        {text: "A conditional statement in JavaScript", correct: false }, ]
    },

    {
    question: "How do you add a property to an object in JavaScript?",
    answers: [ {text: "objectName{property} = value;", correct: true },
        {text: "objectName.property = value;", correct: true },
        {text: "objectName[property] = value;", correct: true },
        {text: "objectName(property) = value;", correct: false } ]
    },
    
    {
    question: "How do you access an element in an array in JavaScript?",
    answers: [ {text: "By its index number", correct: true },
        {text: "By its name", correct: false },
        {text: "By its type", correct: false },
        {text: "By its value", correct: false }, ]
    }, 
        
    {
    question: "What is an object in JavaScript?",
    answers: [ {text: "A set of instructions for a specific task", correct: false },
        {text: "A type of loop in JavaScript", correct: false },
        {text: "A collection of key-value pairs", correct: true },
        {text: "A data structure that holds a collection of values", correct: true }, ]
    },
    
   {
    question: "What is a function in JavaScript??",
    answers: [ {text: "A conditional statement in JavaScript", correct: false },
        {text: "A set of instructions for a specific task", correct: true },
        {text: "A data structure that holds a collection of values", correct: false },
        {text: "A type of loop in JavaScript", correct: false }, ]
    },
    
   {
     question: "How do you call a function in JavaScript?",
     answers: [ {text: "run functionName();", correct: false },
        {text: "functionName();", correct: true },
        {text: "functionName;", correct: false },
        {text: "call functionName();", correct: false }, ]
        }
]


//starts the quiz
startButton.addEventListener("click", startQuiz)

//Makes the Start btn disappear and the question btns to appear
function startQuiz() {
    startButton.style.display = "none";
    for (let i = 0; i < qButton.length; i++) {
        qButton[i].style.display = "inline-block";
        }
        
    displayQuestions();
    startTimer();

}


//countdown function
function startTimer() {
    let timeLeft = 120; // time in seconds
    const timerDisplay = document.getElementById("timerbox");
    const countdown = setInterval(function() {
        timeLeft--;
        timerDisplay.innerText = timeLeft;
        if (timeLeft <= 0 || currentQuestion >= questions.length) {
            clearInterval(countdown);
            // add code here to handle the end of the timer
        }
    }, 1000);
}

//this function should display the questions/answers
function displayQuestions () {
    question.innerText = questions[currentQuestion].question;
    qButton.forEach((button, index) => {
        button.innerText = questions[currentQuestion].answers[index].text;
        button.addEventListener("click", answerChosen);
       });
}

//This function registers an answer and takes the user to the next question
function answerChosen(e) {
     const selectedButton = e.target;
     const correct = selectedButton.innerText === questions[currentQuestion].answers.find(answer => answer.correct).text;

    //Tracks which question the quiz is on
     currentQuestion++;

     //cycles through to the next question if there is one.
  if (currentQuestion < questions.length) {
     displayQuestions();
  }
}


