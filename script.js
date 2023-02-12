const startButton = document.getElementById("startbtn");
const qButtons = document.querySelectorAll(".questionbtn");
const questionContainer = document.getElementById("quizcontainer");



//starts the quiz
startButton.addEventListener("click", startQuiz)

//Makes proper buttons appear:
function startQuiz() {
    startButton.style.display = "none";
    for (let i = 0; i < qButtons.length; i++) {
        qButtons[i].style.display = "inline-block";
    }
}
