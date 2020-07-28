let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guesses = document.querySelector('.guesses');
const guessesCount = document.querySelector('.guessesCount');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resetButton = document.querySelector('.resetButton');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;

function checkGuess() {
    let userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Números ingresados:  ';
    }
    guesses.textContent += userGuess + ' ';
    guessesCount.textContent = 'Te quedan ' + (10 - guessCount) + ' intentos';
    if (userGuess === randomNumber) {
        lastResult.textContent = '¡Felicidades! ¡Lo adivinaste en ' + guessCount + ' intentos!';
        lastResult.style.backgroundColor = '#ade498';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = '¡¡¡Fin del juego!!!';
        setGameOver();
    } else if (userGuess < 1) {
        lastResult.textContent = 'Debes ingresar un número válido';
        lastResult.style.backgroundColor = '#e8505b';
        
    } else {
        lastResult.textContent = '¡Intenta de nuevo!';
        lastResult.style.backgroundColor = '#e8505b';
        if(userGuess < randomNumber) {
        lowOrHi.textContent = '¡El numero es muy bajo!';
        } else if(userGuess > randomNumber) {
        lowOrHi.textContent = '¡El numero es muy alto!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {

    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'block';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.style.display = 'none';

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = '#7fdbda';

    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
}