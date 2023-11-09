const weapons = ['rock', 'paper', 'scissors'];

function computerChoice(){
    const randomIndex = Math.floor(Math.random() * 3);
    return weapons [randomIndex];
}

function determineWinner(Player, computer){
    if (Player === computer){
        return "it's a draw";
    }
    else if ( 
        (Player === 'rock' && computer === 'scissors') ||
        (Player === 'paper' && computer === 'rock') ||
        (Player === 'scissors' && computer === 'paper')){
            return 'You win !';
        }
    else {
        return 'You lose !';
    }
}