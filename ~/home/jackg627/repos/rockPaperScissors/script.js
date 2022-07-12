const choices = ["rock", "paper", "scissors"]
const winners = []

let playerScore = 0
let computerScore = 0

function game() {
    {for (let i = 0; i < 5; i++){
        playRound(i);
     }
    }
    tallyWins(); //play game, 5 rounds, console based
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let playerInput = prompt('Please enter either rock, paper, or scissors.');
    while (playerInput == null) {
        playerInput = prompt('You must enter either rock, paper, or scissors')
    }
    playerInput = playerInput.toLowerCase();
    let check = checkPlayerInput(playerInput)
    while(check == false) {
        playerInput = prompt('You must enter either rock, paper, or scissors. Please use correct spelling. Not case-sensitive.'
        );
    while (playerInput == null) {
            playerInput = prompt('You must enter either rock, paper, or scissors')
    }
        playerInput = playerInput.toLowerCase();
        check = checkPlayerInput(playerInput);     //console.log(playerInput)
    } 
    return playerInput
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];//generate random input from computer
}

function checkPlayerInput(playerInput) {
    if(choices.includes(playerInput)) {
        return true;
    } 
     return false;
}

function checkWinner(choiceP, choiceC){
    console.log(choiceP, choiceC);
    if(choiceP === choiceC){
        return 'Tie';
    } else if(
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "paper" && choiceC === "rock") || 
        (choiceP === "scissors" && choiceC === "paper")
        )
        { 
        return 'You Won!'
    } else {
        return 'You Lost!'}
}

function trackWins(){
    console.log(winners);
} 

function tallyWins() {
    let playerWins = winners.filter((item) => item == 'You Won!').length;
    let computerWins = winners.filter((item) => item == 'You Lost!').length;
    let ties = winners.filter((item) => item == 'Tie').length
    console.log('Results:');
    console.log('Player Wins:', playerWins);
    console.log('ComputerWins:', computerWins);
    console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log("Result of Round:", winner);
    console.log("---------------------");
}
