'use strict';

let sercretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '💥 no number';

    // When player wins
  } else if (guess === sercretNumber) {
    document.querySelector('.message').textContent = 'Correct number 🎉';
    document.querySelector('.number').textContent = sercretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== sercretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > sercretNumber ? 'Too hight 📈' : 'Too Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ❌';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  sercretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
