'use strict';

//constantes

const numberTryInput = document.querySelector('.js-inputNumber');
const button = document.querySelector('.js-button');
const clue = document.querySelector('.js-clue');
const guess = document.querySelector('.js-try');
const numeralTryImput = parseInt(numberTryInput.value);

let test = 0; //contador para acumular los intentos

//función para el número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(`El número es ${randomNumber}`);

//el campo input no puede estar vacío
function checkInput() {
  const numeralTryImput = parseInt(numberTryInput.value);
  
  if (isNaN(numeralTryImput) || numeralTryImput === '') {
    writeMessage('Intentalo :)');
  } else {
    checkNumber(numeralTryImput);
  }
}

//función para comprobar el número

function checkNumber(numeralTryImput){    
    if(randomNumber === numeralTryImput){
        writeMessage("Has ganado campeona!!!");
        test++;
    }else if(numeralTryImput>100 || numeralTryImput<1){
        writeMessage("El número debe estar entre 1 y 100");
        test++;
    }else if(randomNumber>numeralTryImput){
        writeMessage("El número es demasiado bajo");
        test++;
    }else if(randomNumber<numeralTryImput){
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

//funcion manejadora

function handleClick(event){
    event.preventDefault();
    checkInput();
    attempts(test);
}

//el boton escucha

button.addEventListener('click', handleClick);