function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors'];
    const choiceValue = choice[Math.floor(Math.random() * choice.length)];

    return choiceValue;
    
}
