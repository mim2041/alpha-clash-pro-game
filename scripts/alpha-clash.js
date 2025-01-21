// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGround = document.getElementById('play-graound');
//     playGround.classList.remove('hidden')
// }

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}

function continueGame(){
    const alphabet = getARandomAlphabet()

    // set randomly generated alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log("player pressed", event.key);

    // get the expected alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    expectedAlphabet = currentAlphabet.toLowerCase();
    console.log('curretn alphabt', currentAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // const currentScoreSpan = document.getElementById('current-score');
        // const currentScoreText = currentScoreSpan.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore)

        const currentScore = getTextElementValueById('current-score');

        const newScore = currentScore + 1;
        console.log(newScore)

        // currentScoreSpan.innerText = newScore;
        setTextElementValueById('current-score', newScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed')
        // const currentLifeSpan = document.getElementById('current-life');
        // const currentLife = parseInt(currentLifeSpan.innerText);
        
        // const newLife = currentLife - 1;
        // currentLifeSpan.innerText = newLife;
        const currentlife=getTextElementValueById('current-life');
        const newlife = currentlife - 1;
        setTextElementValueById('current-life', newlife);

        if(newlife === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)