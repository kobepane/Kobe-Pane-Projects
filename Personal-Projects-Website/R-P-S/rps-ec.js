let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function play(humanChoice) {
    let humanSelection = humanChoice;
    let computerSelection = randomSelection();
    console.log(humanChoice);
    console.log("Human = " + humanChoice)
    console.log("Computer = " + computerSelection);
    console.log("Wins = " + whoWins(humanSelection, computerSelection));
    displaysResult(humanChoice, "humanPic");
    displaysResult(computerSelection, "computerPic");
    displaysResult(whoWins(humanSelection, computerSelection), "winner");
    score(whoWins(humanSelection, computerSelection));
}

function randomSelection(){
    let computerNum = Math.floor(Math.random()*3);
    if(computerNum == 0) {
        computerSelection = "rock"
    } else if (computerNum == 1){
        computerSelection = "paper"
    } else {
        computerSelection = "scissors"
    }
    return computerSelection;
}

function whoWins(humanSelection, computerSelection) {
    if(humanSelection === "rock" && computerSelection === "paper"){
        return "Computer";
    } else if(humanSelection === "rock" && computerSelection === "scissors"){
        return "Human";
    } else if(humanSelection === "paper" && computerSelection === "rock") {
        return "Human";
    } else if(humanSelection === "paper" && computerSelection === "scissors"){
        return "Computer";
    } else if(humanSelection === "scissors" && computerSelection === "rock"){
        return "Computer";
    } else if(humanSelection === "scissors" && computerSelection === "paper"){
        return "Human";
    } else {
        return "Draw";
    }
} 

function displaysResult(what, where) {
    if(where === "humanPic" && what === "rock"){
        let rockPic = document.getElementById("human");
        rockPic.innerHTML = '<img src="images/rock.png" alt="rock">'
    } else if(where === "humanPic" && what === "paper"){
        let paperPic = document.getElementById("human");
        paperPic.innerHTML = '<img src="images/paper.png" alt="paper">'
    } else if(where === "humanPic" && what === "scissors"){
        let scissorsPic = document.getElementById("human");
        scissorsPic.innerHTML = '<img src="images/scissors.png" alt="scissors">'
    } 
    else if(where === "computerPic" && what === "rock"){
        let computerRock = document.getElementById("computer");
        computerRock.innerHTML = '<img src="images/rock.png" alt="rock">'
    } else if(where === "computerPic" && what === "paper"){
        let computerPaper = document.getElementById("computer");
        computerPaper.innerHTML = '<img src="images/paper.png" alt="paper">'
    } else if(where === "computerPic" && what === "scissors"){
        let computerScissors = document.getElementById("computer");
        computerScissors.innerHTML = '<img src="images/scissors.png" alt="scissors">'
    }
    else if(where === "winner" && what === "Human"){
        let winnerHuman = document.getElementById("wins");
        winnerHuman.innerHTML = "Human"
    } else if(where === "winner" && what === "Computer"){
        let winnerComputer = document.getElementById("wins");
        winnerComputer.innerHTML = "Computer"
    } else if(where === "winner" && what === "Draw"){
        let winnerDraw = document.getElementById("wins");
        winnerDraw.innerHTML = "Draw"
    }
} 

function score(winner){
        if(winner === "Human"){
            humanScore++;
            let humanTally = document.getElementById("humanScore");
            humanTally.innerHTML = humanScore
         } else if(winner === "Computer"){
            computerScore++;
            let computerTally = document.getElementById("computerScore");
            computerTally.innerHTML = computerScore
         } else{
            drawScore++;
            let drawTally = document.getElementById("drawScore");
            drawTally.innerHTML = drawScore
         }
}

function resetScores(){
    let resetHuman = document.getElementById("humanScore");
    resetHuman.innerHTML = (humanScore = 0)
    let resetComputer = document.getElementById("computerScore");
    resetComputer.innerHTML = (computerScore = 0)
    let resetDraw = document.getElementById("drawScore");
    resetDraw.innerHTML = (drawScore = 0)
}
       
    

/*function score(winner){
    if(winner === "Human"){
        let humanTally = document.getElementById("humanScore");
        humanTally.innerHTML = "1"
    } else if(winner === "Computer"){
        let computerTally = document.getElementById("computerScore");
        computerTally.innerHTML = "1"
    } else{
        let drawTally = document.getElementById("drawScore");
        drawTally.innerHTML = "1"
    }
} */

/*function score(winner){
    for(let i = 1; i <10; i++){
    if(winner === "Human"){
        let humanTally = document.getElementById("humanScore");
        humanTally.innerHTML = i
    }
}
    } */





/* function whoWins(humanSelection, computerSelection) {
    if(beats(humanSelection, computerSelection)) {
        return "Human";
    } else if (beats(computerSelection, humanSelection)) {
        return "Computer";
    } else {
        return "Draw";
    }
} 

function beats(A, B) {
    if((A === "rock" && B === "scissors") || 
       (A === "paper" && B === "rock") || 
       (A === "scissors" && B === "paper")) {
        return true;
    } else {
        return false;
    }
} */

/* function play(humanChoice) {
    let humanSelection = humanChoice;
    let computerSelection = randomSelection();
    console.log(humanChoice);
    console.log("Human = " + humanChoice)
    console.log("Computer = " + computerSelection);
    console.log("Wins = " + whoWins(humanSelection, computerSelection));
    displayResult(humanChoice, "humanPic");
    displayResult(computerSelection, "computerPic");
}

function randomSelection(){
    let computerNum = Math.floor(Math.random()*3);
    if(computerNum == 0) {
        computerSelection = "rock"
    } else if (computerNum == 1){
        computerSelection = "paper"
    } else {
        computerSelection = "scissors"
    }
    return computerSelection;
}

function whoWins(humanSelection, computerSelection) {
    if(humanSelection === "rock" && computerSelection === "paper"){
        return "Computer";
    } else if(humanSelection === "rock" && computerSelection === "scissors"){
        return "Human";
    } else if(humanSelection === "paper" && computerSelection === "rock") {
        return "Human";
    } else if(humanSelection === "paper" && computerSelection === "scissors"){
        return "Computer";
    } else if(humanSelection === "scissors" && computerSelection === "rock"){
        return "Computer";
    } else if(humanSelection === "scissors" && computerSelection === "paper"){
        return "Human";
    } else {
        return "draw";
    }
} 

function displayResult(what, where) {
    if(humanChoice === "rock"){
        let rockPic = document.getElementById("humanPic");
        rockPic.innerHTML = '<img src="rock.png" alt="rock">'
    } else if(humanChoice === "paper"){
        let paperPic = document.getElementById("humanPic");
        paperPic.innerHTML = '<img src="paper.png" alt="paper">'
    } else if(humanChoice === "scissors"){
        let scissorsPic = document.getElementById("humanPic");
        scissorsPic.innerHTML = '<img src="scissors.png" alt="scissors">'
    } 
    
    else if(computerSelection === "rock"){
        let computerRock = document.getElementById("computerPic");
        computerRock.innerHTML = '<img src="rock.png" alt="rock">'
    } else if(computerSelection === "paper"){
        let computerPaper = document.getElementById("computerPic");
        computerPaper.innerHTML = '<img src="paper.png" alt="paper">'
    } else if(computerSelection === "scissors"){
        let computerScissors = document.getElementById("computerPic");
        computerScissors.innerHTML = '<img src="scissors.png" alt="scissors">'
    }
} */


/* let test = document.getElementById("humanPic");
test.innerHTML = '<img src="rock.png" alt="rock">'
*/