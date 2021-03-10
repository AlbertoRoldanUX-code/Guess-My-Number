'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there's no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.message').style.color = '#eee';
    }
  }
  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      document.querySelector('.message').style.color = 'red';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      document.querySelector('.message').style.color = 'red';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
