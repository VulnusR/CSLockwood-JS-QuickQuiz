const startButton = document.getElementById("startbtn");
const qButton = document.querySelectorAll(".questionbtn");
const questionContainer = document.getElementById("quizcontainer");
const question = document.getElementById("questionbox");

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


