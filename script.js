document.querySelector(".btn button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    // Show elements when the game starts
    document.querySelector(".previousGuess").style.display = "block";
    document.querySelector(".output").style.display = "block";
    document.querySelector(".restart").style.display = "flex"; // Flex for centering

    // Expand the container
    document.querySelector(".container").classList.add("expanded");
});

let randomNumber = 1 + Math.floor(Math.random() * 99);
let guesses = [];
let attempts = 10;

const userInput = document.body.querySelector(".number input");
const previousGuess = document.body.querySelector(".previousGuess #past");
const output = document.body.querySelector(".output #output");
const suggestion = document.body.querySelector(".output #suggestion");
const submitButton = document.body.querySelector(".btn button");
const restart = document.body.querySelector(".restart button");


submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let userGuess = Number(userInput.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        output.innerHTML = "Please Enter a Valid Number Between 1 to 100!";
        output.style.background = "yellow";
        output.style.color = "black";
        return;
    }

    guesses.push(userGuess);
    previousGuess.innerHTML = guesses.join(", ");

    userInput.value = "";

    if (userGuess < randomNumber) {
        output.innerHTML = "WRONG!!!";
        output.style.background = "red";
        suggestion.innerHTML = "Last Guess Was Too Low!";
    } else if (userGuess > randomNumber) {
        output.innerHTML = "WRONG!!!";
        output.style.background = "red";
        suggestion.innerHTML = "Last Guess Was Too High!";
    } else {
        output.innerHTML = "Congratulations! You Got It Right!";
        output.style.background = "green";
        suggestion.innerHTML = "You're a Genius!";

        userInput.disabled = true;
    }

    attempts--;

    if (attempts === 0 && userGuess !== randomNumber) {
        output.innerHTML = "Game Over! The Correct Number Was " + randomNumber;
        output.style.background = "red";
        output.style.color = "white";
        suggestion.innerHTML = "Click Below Button to try Again!!!"

        userInput.disabled = true;
    }
});

// restart game

restart.addEventListener("click", function () {
    randomNumber = 1 + Math.floor(Math.random() * 99);
    guesses = [];
    attempts = 10;
    previousGuess.innerHTML = "";
    output.innerHTML = "";
    output.style.background = "none";
    suggestion.innerHTML = "";
    userInput.value = "";
    userInput.disabled = false;
})
