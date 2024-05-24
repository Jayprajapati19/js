let randomNumber = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt')
const Userinput = document.querySelector('#guessField')
const guesslot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const lowOurHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(Userinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number ")
    } else if (guess < 1) {
        alert("Please Enter a  Number more than 1 ")
    } else if (guess > 100) {
        alert("Please Enter a  Number less than 100 ")
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed Right `)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOO Low `)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is TOO High `)
    }
}

function displayGuess(guess) {
    Userinput.value = ''
    guesslot.innerHTML += `${guess},  `;
    numGuess++;
    remainig.innerHTML = `${11 - numGuess}`

}

function displayMessage(message) {
    lowOurHi.innerHTML = `<h3>${message}<h3/>`

}

function endGame() {
    Userinput.value = '';
    Userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber - (parseInt(Math.random() * 100 + 1))
        prevGuess = []
        numGuess = 1
        guesslot.innerHTML = ''
        remainig.innerHTML = `${11 - numGuess}`;
        Userinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    });
};
