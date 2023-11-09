const secretNumber = Math.floor(Math.random()*25) + 1;

function checkGuess(){
    const userGuess = parseInt(document.getElementById('guessInput').value);
    let difference = Math.abs(secretNumber - userGuess);

    if (userGuess === secretNumber){
        alert("Awesome! Your number " + userGuess + " was correct. you can be named many things, hungry not being one of them.");
    }
    else if (difference === 1){
        alert("So close, but you just missed it! Are you in a class that started on the thirteenth or what?");
    }
    else{
        alert("Bummer... You guessed " + userGuess + ", but the secret number was " + secretNumber + ".");
    }
}