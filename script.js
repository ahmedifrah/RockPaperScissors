function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    const choiceValue = choice[Math.floor(Math.random() * choice.length)];

    return choiceValue;
    
}

function playRound(playerSelection, computerSelection){

    console.log(computerSelection);

    if (playerSelection === computerSelection){
        return `You tied!`;
    }else {
        if (playerSelection === "Rock" && computerSelection === "Scissors"){
            return `You Won! ${playerSelection} beats ${computerSelection}`;
    
        } else {
            return `You Lost! ${computerSelection} beats ${playerSelection}`;
        }
    }

    



}



const playerSelection = "Rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));