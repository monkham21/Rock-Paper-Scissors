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
    // player wins
    if ((playerSelection == "rock" && computerSelection == "scissor" ) || (playerSelection == "paper" && computerSelection == "rock" ) || (playerSelection == "scissor" && computerSelection == "paper" )) {
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}.`;
    }
    // draw
    else if (playerSelection == computerSelection) {
        return "It's a draw."
    }
    // computer wins
    else {
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.substring(1)} beats ${playerSelection}.`;
    }
}


// five rounds game
function game(){
    let player = 0, computer = 0;

    // 5 rounds
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock,Paper,Scissor: ");
        const computerSelection = getComputerChoice();

        // print choices
        console.log(`Player: ${playerSelection}\nComputer : ${computerSelection}`)

        const round = playRound(playerSelection, computerSelection);
        if (round.search("Win") != -1) {
            player++;
        } else if (round.search("Lose") != -1) {
            computer++;
        }
    }

    // determine winner
    if (player > computer) {
        console.log("You Win!");
    } else if (computer > player) {
        console.log("Computer Wins!");
    } else {
        console.log("It's a draw.");
    }
    console.log(`You ${player} : Computer ${computer}`);
}

game();