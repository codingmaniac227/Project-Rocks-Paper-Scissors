let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomize = Math.floor(Math.random() * 3);
    if (randomize === 0) {
        return 'Rock';
    } else if (randomize === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let selection = prompt("Rock, Paper, or Scissors?: ");

    // Check if selection is null (i.e., the user clicked "Cancel" or pressed Escape)
    if (selection === null) {
        console.log("You cancelled the game. Exiting.");
        return null;  // Or you can return a default value or handle the exit logic
    }

    // Trim the input and capitalize the first letter to ensure proper case
    selection = selection.trim();
    selection = selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();

    // Validate the input
    if (selection !== 'Rock' && selection !== 'Paper' && selection !== 'Scissors') {
        console.log("INVALID SELECTION!");
        return getHumanChoice();  // Recursively ask for valid input
    } else {
        return selection;
    }
}

function playGame() {
    console.log("Welcome to the game! You will play 12 rounds.");
    
    for (let i = 0; i < 12; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Score: Human - ${humanScore} | Computer - ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
    // Rock vs. Paper
    if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        console.log("You lose! Rock loses to Paper");
        computerScore++;
    }
    // Paper vs. Rock
    else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    // Rock vs. Scissors
    else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    // Scissors vs. Rock
    else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        console.log("You lose! Scissors loses to Rock");
        computerScore++;
    }
    // Scissors vs. Paper
    else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log("You win! Scissors beat Paper");
        humanScore++;
    }
    // Paper vs. Scissors
    else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        console.log("You lose! Paper loses to Scissors");
        computerScore++;
    }
    // DRAW
    else if (humanChoice === computerChoice) {
        console.log("DRAW! GO AGAIN!");
    }
}

playGame();
