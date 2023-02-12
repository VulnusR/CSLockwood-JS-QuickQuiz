let userScore = localStorage.getItem("Score");
let userName = localStorage.getItem("User");

submitButton.addEventListener("click", storageFunction);

function storageFunction(event) {
    event.preventDefault(); //this prevents the browser from submitting info to a server, allowing me to locally store data.
    localStorage.setItem("Score", correctSelection);
    localStorage.setItem("User", initalsInput.value);

    let userScore = localStorage.getItem("Score");
    let userName = localStorage.getItem("User");
}
    
