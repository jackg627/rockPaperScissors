const choices = ["rock", "paper", "scissors"]

function game() {
   playRound() //play game, 5 rounds, console based
}

function playRound() {
    const playerSelection = playerChoice();//player choice input
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
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
    if(choiceP === choiceC){
        return 'Tie';
    } else if(
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "paper" && choiceC === "rock") || 
        (choiceP === "scissors" && choiceC === "paper")
        ){
        return "You Won! "
    } else{return "You Lost!"}
}



game();