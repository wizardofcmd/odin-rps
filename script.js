const handSigns = ["ROCK", "PAPER", "SCISSORS"];
const draw = "It's a draw! Computer also chose "
const win = "You win! Computer chose "
const lose = "You lose! Computer chose "
const introMsg = "Welcome to Rock Paper Scissors. Choose a handsign."
let playerAnswer;

function getComputerChoice() {
    // Generates an int number between 1, 2 or 3
    let index = Math.floor(Math.random() * handSigns.length);
    // Passes in the chosen int as the index, selecting a handsign
    return handSigns[index]
}

function playRockPaperScissors(playerSelection,
    computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toUpperCase();
    switch (playerSelection) {
        case "ROCK":
            switch (computerSelection) {
                case "ROCK":
                    return draw + computerSelection;
                case "PAPER":
                    return lose + computerSelection;
                case "SCISSORS":
                    return win + computerSelection;
            }
        case "PAPER":
            switch (computerSelection) {
                case "ROCK":
                    return win + computerSelection;
                case "PAPER":
                    return draw + computerSelection;
                case "SCISSORS":
                    return lose + computerSelection;
            }
        case "SCISSORS":
            switch (computerSelection) {
                case "ROCK":
                    return lose + computerSelection;
                case "PAPER":
                    return win + computerSelection;
                case "SCISSORS":
                    return draw + computerSelection;
            }
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;

    // playerAnswer = prompt(introMsg);
    // result = playRockPaperScissors(playerAnswer);
    // console.log(result);
}

game();