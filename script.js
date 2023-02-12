const startButton = document.getElementById("startbtn");
const qButton = document.querySelectorAll(".questionbtn");
const questionContainer = document.getElementById("quizcontainer");
const question = document.getElementById("questionbox");




//array for questions
const questions = [
   {
    question: "What is JavaScript used for in web development?",
    answers: [ {text: "A) Creating dynamic and interactive websites", correct: true },
             {text: "B) Designing the layout and style of a website", correct: false },
             {text: "C) Implementing server-side logic", correct: false },
             {text: "D) Storing data on a website", correct: false } ]
   },
   {
    question: "What is a variable in JavaScript?",
    answers: [ {text: "B) A set of instructions for a specific task", correct: false },
             {text: "C) A type of loop in JavaScript", correct: false },
             {text: "D) A value that can be changed", correct: false },
             {text: "A) A named container that holds data", correct: true }, ]





   }

]












//starts the quiz
startButton.addEventListener("click", startQuiz)

//Makes the Start btn disappear and the question btns to appear
function startQuiz() {
    startButton.style.display = "none";
    for (let i = 0; i < qButton.length; i++) {
        qButton[i].style.display = "inline-block";
        displayQuestions();
    }
}


function displayQuestions () {
    console.log(displayquestions)
    question.innerText = questions[currentQuestion].question;
    qButton.forEach((button, index) => {
        button.innerText = questions[currentQuestion].answers[index].text;
        button.addEventListener("click", selectAnswer);
       });
}

