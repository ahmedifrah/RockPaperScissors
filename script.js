function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    const choiceValue = choice[Math.floor(Math.random() * choice.length)];

    return choiceValue;
    
}

function playRound(playerSelection, computerSelection){



    if (playerSelection === computerSelection){
        tie += 1;
        return `You tied! You both took ${playerSelection}`;
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

let win = 0;
let loss = 0;
let tie = 0;

function handleClick(){

    const value = this.textContent;
    const container = document.querySelector('.container')

    for (let i = 1; i < 6; i++){
 
            let playerSelection = value;
            let computerSelection = getComputerChoice();
            const text = (playRound(playerSelection, computerSelection));
            const div = document.createElement('div');
            div.textContent = text;
            container.appendChild(div);
      
        

    }

    if (win > loss && tie){
        const result = document.createElement('div');
        result.textContent = ('You are the winner !');
        container.appendChild(result);
    } else if (win === loss){
        const result = document.createElement('div');
        result.textContent = ('You tied !');
        container.appendChild(result);
    }
    else {
        const result = document.createElement('div');
        result.textContent = ('You Lost !');
        container.appendChild(result);
    }

    const score = document.createElement('div');

    score.textContent = (`You won: ${win} round(s) \n
                 You Lost: ${loss} round(s) \n
                 You Tied: ${tie} round(s)`);

    container.appendChild(score);
    
}



const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick, false)
});
