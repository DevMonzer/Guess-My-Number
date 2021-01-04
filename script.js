'use strict';

const check = document.querySelector('.check');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
const scores = document.querySelector('.score');

let sercretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '💥 no number';

    // When player wins
  } else if (guess === sercretNumber) {
    message.textContent = 'Correct number 🎉';
    number.textContent = sercretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== sercretNumber) {
    if (score > 1) {
      message.textContent =
        guess > sercretNumber ? 'Too hight 📈' : 'Too Low 📉';
      score--;
      scores.textContent = score;
    } else {
      message.textContent = 'You lost the game ❌';
      scores.textContent = 0;
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  sercretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  message.textContent = 'Start guessing...';
  scores.textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
