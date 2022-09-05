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


function game(){
    let player = 0, computer = 0;

    // player select through buttons
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('button').forEach(function(button) {
            button.onclick = function() {
                const playerSelection = button.dataset.choice;
                const computerSelection = getComputerChoice();
                console.log(`Player: ${playerSelection}\nComputer : ${computerSelection}`)
                const round = playRound(playerSelection, computerSelection);

                if (round == 1) {
                        player++;
                    } else if (round == -1) {
                        computer++;
                    }
                console.log(player, computer);
            }
        });
    });





    // determine winner
//    if (player > computer) {
//        console.log("You Win!");
//    } else if (computer > player) {
//        console.log("Computer Wins!");
//    } else {
//        console.log("It's a draw.");
//    }
//    console.log(`You ${player} : Computer ${computer}`);
}

game();