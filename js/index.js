//HTML elements
const resetButton = document.getElementById("reset-button");
const checkAnswerButton = document.getElementById("check-answer-button");
const userGuess = document.getElementById("guess");
const guessCount = document.getElementById("guesscount-value");
const hint = document.getElementById("hint-value");
const highscore= document.getElementById("highscore-value");
const answer = document.getElementById("answer-value");

//the number that the use is trying to guess
let selectedNumber =randomNumber();

//adds event listener to user guess submission
checkAnswerButton.addEventListener('click', () => { 
//checks to see if use guess is empty
if(userGuess.value==""){
    hint.innerText="Guess a number!";
}
//returns hint if guess is too high
else if(userGuess.value>selectedNumber){
    hint.innerText="To high!";
    incrementGuessCount();
}
//returns hint if guess is too low
else if(userGuess.value<selectedNumber){
    hint.innerText="To low!";
    incrementGuessCount();
 
}
//user guess is correct
else{
    hint.innerText="You guessed the number!";
    answer.innerText=selectedNumber;
    incrementGuessCount();
    //if there is no highscore then change highscore
    if(highscore.innerText==""){
        highscore.innerText=guessCount.innerText;
    }
    //if highscore is higher than guess count change new highscore
    else if(Number(highscore.innerText)>Number(guessCount.innerText)){
        highscore.innerText=guessCount.innerText;
    }
}

});

////adds event listener to reset button
resetButton.addEventListener('click', () => {
    //reset selectedNumber to a new number and resets game console
    selectedNumber=randomNumber();
    guessCount.innerText="0";
    answer.innerText="?";
    hint.innerText="";
    userGuess.value="";
});

//generates random number between 1-50
function randomNumber(){
    return Math.floor(Math.random()*50);
}

//increments the guess count 
function incrementGuessCount(){
    guessCount.innerText=(Number(guessCount.innerText)+1);
}
