const HANDSIGNS = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    // Generates an int number between 1, 2 or 3
    let index = Math.floor(Math.random() * HANDSIGNS.length);
    // Passes in the chosen int as the index, selecting a handsign
    return HANDSIGNS[index]
}