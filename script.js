const selection = Array["rock", "paper", "scissors"]
let playerInput = prompt("Please enter either 'Rock', 'Paper', or 'Scissors'"); // Accepts input from user, define as "playerSelection"
   // If user enters a number, print "You must enter either "Rock", "Paper", or "Scissors"

functionplayerSelection(playerInput) {playerInput.toLowerCase()
}   // Convert user input to lowercase   
   // If user enters any string other than "Rock", "Paper", or "Scissors", print "You must enter either 'Rock', 'Paper', or 'Scissors'"

function computerPlay(selection) {.sample(selection)
}

function playRound(playerSelection, computerSelection){    // Define rules of game in function playRound()
   if(playerSelection === computerSelection) {result.textContent = "You Tie!"} //If playerSelection = computerSelection, print "You Tie!"
   }
   else if(playerSelection == "rock"){
       if(computerSelection == "scissors") {
           result.textContent = "You Win!"
       }
       else{result.textContent = "You Lose!"}
   }
   else if(playerSelection == "paper"){
       if(computerSelection == "rock") {
           result.textContent = "You Win!"
       }
       else{result.textContent = "You Lose!"}
   }
   else if(playerSelection == "scissors"){
       if(computerSelection == "paper") {
           result.textContent = "You Win"
       }
       else{result.textContent = "You Lose!"}
   }
   else{result.textContent = "You must enter either 'Rock', 'Paper', or 'Scissors'"}