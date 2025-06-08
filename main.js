// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


// Initialize DOM elements
const playButton = document.getElementById("playgameEl");
const audio = document.getElementById('kahootMusic');
const gameScreen = document.getElementById("gamescreen");
const roundsInput = document.getElementById("roundsinput-el");

// Mute audio initially
audio.muted = true;

// Event listener for the Play Game button
playButton.addEventListener('click', function() {
    console.log("Welcome to the game! You will play 12 rounds.");
    audio.muted = false;
    audio.play();

    // Hide the start screen and show the round selection screen
    document.getElementById("startscreen").style.display = "none";
    document.getElementById("roundselect").style.display = "block";

    // Get the number of rounds from the input field
    let rounds = parseInt(roundsInput.value, 10);
    if (isNaN(rounds) || rounds <= 0) {
        let newP = document.createElement("div");
        newP.innerHTML = `<p>Invalid number of rounds. Defaulting to 3 rounds</p>`;
        document.getElementById("roundselect").appendChild(newP);
        rounds = 3;
    }

    // Clear the game screen
    gameScreen.innerHTML = '';

    // Loop through the rounds
    for (let i = 0; i < rounds; i++) {
        let humanSelection = getHumanChoice();
        if (humanSelection === null) break;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Score: Human - ${humanScore} | Computer - ${computerScore}`);
});

// Function to play a round
function playRound(humanChoice, computerChoice) {
    // Hide the round selection screen and show the game screen
    document.getElementById("roundselect").style.display = "none";
    document.getElementById("gamescreen").style.display = "block";

    // Change background image
    changeBackgroundImage('./images/game-background.png');


    
    const resultDisplay = document.createElement('div');
    resultDisplay.classList.add('round-result');
    resultDisplay.innerHTML = `
        <p>Round Result:</p>
        <p>You chose: ${humanChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
    `;
    gameScreen.appendChild(resultDisplay);

    if (humanChoice === computerChoice) {
        console.log("DRAW! GO AGAIN!");
        resultDisplay.innerHTML += `<p>It's a draw!</p>`;
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        console.log("You win!");
        humanScore++;
        resultDisplay.innerHTML += `<p>You win this round!</p>`;
    } else {
        console.log("You lose!");
        computerScore++;
        resultDisplay.innerHTML += `<p>Computer wins this round!</p>`;
    }
}

// Function to change the background image
function changeBackgroundImage(imageUrl) {
    const img = new Image();
    img.onload = function() {
        document.body.style.backgroundImage = `url(${imageUrl})`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    };
    img.onerror = function() {
        console.error("Failed to load image:", imageUrl);
    };
    img.src = imageUrl;
}
