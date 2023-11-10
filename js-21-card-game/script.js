const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

function drawnCard(){
    const randomIndex = Math.floor(Math.random() * cards.length);
    const drawnCard = cards[randomIndex];
}

const resultElement = document.getElementById("result");
resultElement.textContent = "You drew a" + drawnCard + ".";

if (isBust(drawnCard)){
    resultElement.textContent += "BUST ! You exceeded 21.";
}