// choice array
const choices = ["rock", "paper", "scissor"];
const len = choices.length;


// computer's choice
function getComputerChoice() {
    choice = Math.floor(Math.random() * len);
    return choices[choice];
}


// single round game
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if ((playerSelection == "rock" && computerSelection == "scissor" ) || (playerSelection == "paper" && computerSelection == "rock" ) || (playerSelection == "scissor" && computerSelection == "paper" )) {
        return 1  // player wins
    } else if (playerSelection == computerSelection) {
        return 0 // draw
    } else {
        return -1 // computer wins
    }
}


// player select through buttons
function game(){
    let player = 0, computer = 0;

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('button').forEach(function(button) {
            button.onclick = function() {
                const playerSelection = button.dataset.choice;
                const computerSelection = getComputerChoice();
                const round = playRound(playerSelection, computerSelection);

                // editing scores for each round
                if (round == 1) {
                        player++;
                        document.querySelector('#announce').innerHTML = `your ${playerSelection} beats ${computerSelection}!`
                        document.querySelector('#player-score').innerHTML = `${player}`
                    } else if (round == -1) {
                        computer++;
                        document.querySelector('#announce').innerHTML = `${computerSelection} beats your ${playerSelection}!`
                        document.querySelector('#computer-score').innerHTML = `${computer}`
                    } else {
                        document.querySelector('#announce').innerHTML = `${computerSelection} and ${playerSelection},
                        it is a draw`
                    }

                // display final result
                let final = document.querySelector('#final');
                if ( player == 5 ) {
                    final.innerHTML = "You Win :) !";
                    final.style.color = "green";
                } else if ( computer == 5 ) {
                    final.innerHTML = "You Lose :(";
                    final.style.color = "red";
                }
            }
        });
    });
}


game();