function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    const choiceValue = choice[Math.floor(Math.random() * choice.length)];

    return choiceValue;
    
}

function playRound(playerSelection, computerSelection){



    if (playerSelection === computerSelection){
        tie += 1;
        return `You tied!`;
    }else {
        if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper") ){
            win += 1;
            return `You Won! ${playerSelection} beats ${computerSelection}`;
    
        } else {
            
            loss +=1;
            return `You Lost! ${computerSelection} beats ${playerSelection}`;
        }
    }
}

function game(){

    for (let i = 1; i < 6; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?")
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
  
    }

    if (win > loss && tie){
        console.log('You are the winner!');
    } else if (win === loss){
        console.log( 'You tied!');
    }
    else {
        console.log('You Lost!')
    }

    console.log(`You won: ${win} round(s) \n
                 You Lost: ${loss} round(s) \n
                 You Tied: ${tie} round(s)`);


}
let win = 0;
let loss = 0;
let tie = 0;

console.log(game())



// let playerSelection = prompt("Rock, Paper or Scissors?");
// let computerSelection = getComputerChoice();
// console.log(game());

// console.log(playRound(playerSelection, computerSelection));