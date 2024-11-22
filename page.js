const Rock = document.querySelector("#rock")
const Paper = document.querySelector("#paper")
const Scissors = document.querySelector("#scissors")

Rock.setAttribute("style", "color:red")
Paper.setAttribute("style", "color:green")
Scissors.setAttribute("style", "color:blue")

// adding event to buttons, to play a round with player chocie
Rock.addEventListener("click", () => alert(playRound(0)))
Paper.addEventListener("click",() => alert(playRound(1)))
Scissors.addEventListener("click",() => alert(playRound(2)))



function playRound(playerInput) {
    let roundOutcome = gameRound(playerInput);
    let outcome = roundOutcome[1];
    let outputM = roundOutcome[0];
    if (outcome == 0) {
        document.querySelector('.scorelist .playerScore').textContent++;
    }
    else if (outcome == 1) {
        document.querySelector('.scorelist .computerScore').textContent++;
    }

    return outputM;


}




function getComputerChoice() {
    let number = Math.random();
    if (number < 1 / 3) {
        return 0;
    }
    else if (number < 2 / 3) {
        return 1;
    }
    else {
        return 2;
    }
}


function gameRound(playerInput) {
    let computerChoice = getComputerChoice();
    let compOutputArray = ["Computer has used Rock!\n", "Computer has used Paper!\n", "Computer has used Scissors!\n"]

    let outcome = -1;
    let outputMessage = "";
    outputMessage += compOutputArray[computerChoice];
    if (playerInput == 0) {
        if (computerChoice == 2) {
            outcome = 0
            outputMessage += "Player win!\n"
        }
        else if (computerChoice == 1) {
            outcome = 1
            outputMessage += 'Computer win!\n'
        }
        else {
            outcome = 2
            outputMessage += 'Draw!\n'
        }
    }
    else if (playerInput == 1) {
        if (computerChoice == 0) {
            outcome = 0
            outputMessage += 'Player win!\n'
        }
        else if (computerChoice == 1) {
            outcome = 2;
            outputMessage +='Draw!\n'
        }
        else {
            outcome = 1;
            outputMessage += 'Computer win!\n'
        }
    }
    else {
        if (computerChoice == 0) {
            outcome = 1
            outputMessage += 'Computer win!\n'
        }
        else if (computerChoice == 1) {
            outcome = 0
            outputMessage +='Player win!\n'
        }
        else {
            outcome = 2
            outputMessage +='Draw!\n' 
        }

    }
    return [outputMessage, outcome];
}
