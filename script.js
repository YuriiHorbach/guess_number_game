'use strict';

const message =  document.querySelector('.message');

let secretNumber = Math.floor(Math.random() * 20) + 1;

let generatedSecretNumber = document.querySelector('.number');

generatedSecretNumber.textContent = '?';

let btn_check = document.querySelector('.check');

let score_element = document.querySelector('.score');

let score = 20;

let highscore = 0;

let highscore_output = document.querySelector('.highscore');

function displayMessage(message){
  document.querySelector('.message').textContent = message;
}

const handleClick = function(){
  let guess = Number(document.querySelector('.guess').value);

  if(!guess){
    displayMessage("⛔️ No number!");
  } else if(guess === secretNumber){
    displayMessage("Success!!!🎉🚀");
    generatedSecretNumber.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
      highscore = score;
      highscore_output.textContent = highscore;

    }
  } else if(guess !== secretNumber){
    if(score > 1){
      displayMessage(guess > secretNumber ? "To hight!!! 🧐" : "To low!!! 🧐");
      score --;
      score_element.textContent = score;
    } else {
      displayMessage("You lose the game!");
    }
  }
}

btn_check.addEventListener('click', handleClick);

//Again button functionality

let again_btn = document.querySelector('.again');

let reset = function(){
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score_element.textContent = score;
  generatedSecretNumber.textContent = '?';
  let guess = Number(document.querySelector('.guess').value = '');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage("Start guessing...");
}

again_btn.addEventListener('click', reset);

