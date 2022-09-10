const handSigns = ["ROCK", "PAPER", "SCISSORS"];
const draw = "It's a draw! Computer also chose ";
const win = "You win! Computer chose ";
const lose = "You lose! Computer chose ";
const introMsg = "Welcome to Rock Paper Scissors. Choose a handsign.";
const buttons = document.querySelectorAll("button");
const output = document.querySelector(".output");
const computerChoiceElem = document.querySelector("#computer-choice");
const playerScoreCell = document.querySelector("#player-score-cell");
const computerScoreCell = document.querySelector("#computer-score-cell");
let playerScore = 0;
let compScore = 0;
let playerChoice;
let result;

function getComputerChoice() {
    // Generates an int number between 1, 2 or 3
    let index = Math.floor(Math.random() * handSigns.length);
    // Passes in the chosen int as the index, selecting a handsign
    return handSigns[index];
}

function playRockPaperScissors(
    playerSelection, computerSelection = getComputerChoice()) {
    computerChoiceElem.textContent = computerSelection;
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

function updateScore(roundResult) {
    if (roundResult.includes(win)) {
        ++playerScore;
        playerScoreCell.textContent = playerScore;
    }
    else if (roundResult.includes(lose)) {
        ++compScore;
        computerScoreCell.textContent = compScore;
    }
}

function game() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerScore === 5 || compScore === 5) {
                return;
            }

            playerChoice = button.textContent.toUpperCase();
            result = playRockPaperScissors(playerChoice);
            updateScore(result);

            if (playerScore === 5) {
                const winElement = document.createElement('p');
                winElement.classList.add('win-txt');
                winElement.textContent = 
                    "Victory! Man triumphs against machine.";
                output.appendChild(winElement);
                return;
            }
            else if (compScore === 5) {
                const loseElement = document.createElement('p');
                loseElement.classList.add('lose-txt');
                loseElement.textContent = 
                    "Failure! Machines reign supreme.";
                output.appendChild(loseElement);
                return;
            }
        });
    });
}

game();