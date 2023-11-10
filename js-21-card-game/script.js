const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

let playerTotal = 0;

function drawnCard(){
    const randomIndex = Math.floor(Math.random() * cards.length);
    const drawnCard = cards[randomIndex];


    updateTotal(drawnCard);

    const resultElement = document.getElementById("result");
    resultElement.textContent = 'You drew a' + drawnCard + '. Total:' + playerTotal + '.';

    if (isBust()){
        resultElement.textContent += 'BUST ! You exceeded 21.';
        resetGame();
    }
}

function updateTotal(cardValue){
    if (cardValue === 1){
        playerTotal += 11;
        if (playerTotal > 21){
            playerTotal -= 10;
        }
    } 
    else{
        playerTotal += cardValue;
    }
}
