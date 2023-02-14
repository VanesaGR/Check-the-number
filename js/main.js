'use strict';

//constantes

const numberTryInput = document.querySelector('.js-inputNumber');
const button = document.querySelector('.js-button');
const clue = document.querySelector('.js-clue');
const guess = document.querySelector('.js-try');

let test = 0; //contador para acumular los intentos

//función para el número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(`El número es ${randomNumber}`);

//el campo input no puede estar vacío
function checkInput() {
  if (numberTryInput.value === '') {
    writeMessage('Intentalo :)');
  } else {
    checkNumber();
  }
}

//función para comprobar el número

function checkNumber(){    
    if(randomNumber=== parseInt(numberTryInput.value)){
        writeMessage("Has ganado campeona!!!");
        test++;
    }else if(parseInt(numberTryInput.value)<=0 || parseInt(numberTryInput.value)>100){
        writeMessage("El número debe estar entre 1 y 100");
    }else if(randomNumber>parseInt(numberTryInput.value)){
        writeMessage("El número es demasiado bajo");
        test++;
    }else if(randomNumber<parseInt(numberTryInput.value)){
        writeMessage("El número es demasiado alto");
        test++;
    }
}

//función para poner el mensaje

function writeMessage(message){
    clue.innerHTML=message;
}

//funcion para contar intentos

function attempts(attempts){
    guess.innerHTML=attempts;
}

function checkAttempts(){
    attempts(`Llevas ${test} intentos`);
}

//funcion manejadora

function handleClick(event){
    event.preventDefault();
    checkInput();
    checkAttempts();
}

//el boton escucha

button.addEventListener('click', handleClick);