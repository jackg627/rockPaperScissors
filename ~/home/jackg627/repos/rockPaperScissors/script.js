let myArray = ["rock", "paper", "scissors"];


function computerPlay() {
    let computerSelection = myArray[Math.floor(Math.random()*myArray.length)];
    return computerSelection
}

let playerSelection = "rock"
let computerSelection = computerPlay()

function playRound(playerSelection, computerSelection) { 
    
    

    if (playerSelection == computerSelection){return "You Tie!"
    }
    else {
        if (playerSelection == "rock"){
            if (computerSelection == "scissors") {
                return "You Win! Rock beats Scissors"
            }
            else {
                return "You Lose! Paper beats Rock"
            }
        }
    }
    if (playerSelection == "paper"){
            if (computerSelection == "rock") {
                return "You Win! Paper beats Rock"
            }
            else {
                return "You Lose! Scissors beats Paper"
            }
        }
    }
    if (playerSelection == "scissors"){
            if (computerSelection == "paper") {
                return "You Win! Scissors beats Paper"
            }
            else { if (computerSelection == "rock")
                return "You Lose! Rock beats Scissors"
            }
 }
    
