let scores = [];
let userScore = localStorage.getItem("Score");
let userName = localStorage.getItem("User");

submitButton.addEventListener("click", storageFunction);

function storageFunction(event) {
    event.preventDefault();
    localStorage.setItem("Score", correctSelection);
    localStorage.setItem("User", initalsInput.value);

    let userScore = localStorage.getItem("Score");
    let userName = localStorage.getItem("User");

    // Push the score and initials into the scores array
    scores.push({
        initials: userName,
        score: userScore
    });

    // Convert the scores array into a JSON string
    let scoresJson = JSON.stringify(scores);

    // Store the JSON string in local storage
    localStorage.setItem("scores", scoresJson);
}
    
