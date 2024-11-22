

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

function getPlayerChoice() {
    let input = parseInt(prompt("Input your choice:\nRock - 0\n Paper - 1\nScissors - 2\n"))
    while (input != 0 && input != 1 && input != 2) {
        input = parseInt(prompt("Invalid input!\nInput your choice:\nRock - 0\nPaper - 1\nScissors - 2\n"))
    }
    return input;
}

function gameRound() {
    let playerInput = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let compOutputArray = ["Computer has used Rock!\n", "Computer has used Paper!\n", "Computer has used Scissors!\n"]

    let outcome = -1;
    console.log(compOutputArray[computerChoice]);
    if (playerInput == 0) {
        if (computerChoice == 2) {
            outcome = 0
            console.log("Player win!\n")
        }
        else if (computerChoice == 1) {
            outcome = 1
            console.log('Computer win!\n')
        }
        else {
            outcome = 2
            console.log('Draw!\n')
        }
    }
    else if (playerInput == 1) {
        if (computerChoice == 0) {
            outcome = 0
            console.log("Player win!\n")
        }
        else if (computerChoice == 1) {
            outcome = 2;
            console.log('Draw!\n');
        }
        else {
            outcome = 1;
            console.log('Computer win!\n');
        }
    }
    else {
        if (computerChoice == 0) {
            outcome = 1
            console.log("Computer win!\n");
        }
        else if (computerChoice == 1) {
            outcome = 0
            console.log('Player win!\n');
        }
        else {
            outcome = 2
            console.log('Draw!\n');
        }

    }
    return outcome;
}

// play 5 rounds

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let outcome = gameRound();
        if (outcome == 0) {
            playerScore++;
        }
        else if (outcome == 1) {
            computerScore++;
        }
    }
    console.log("Player score:", playerScore);
    console.log("Computer score:", computerScore);
}

game();