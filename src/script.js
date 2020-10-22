'use strict'

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20

// console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

// secret number generator
const numGenerator = function() {
  secretNumber
}

// update message class
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
}

// update score class
const scoreMessage = function(currentScore) {
  document.querySelector('.score').textContent = currentScore
}

// update body color
const bodyColor = function(color) {
  document.querySelector('body').style.backgroundColor = color
}

// update number class
const number = function(num, width) {
  document.querySelector('.number').textContent = num
  document.querySelector('.number').style.width = width
}

// handles 'Again!' button
document.querySelector('.again').addEventListener('click', function() {
  // new secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1

  // reset score
  score = 20
  scoreMessage(score)

  // reset body color
  bodyColor('#222')

  // reset number class
  number('?', '15rem')

  // reset message class
  displayMessage('Start guessing...')

  // reset guess class
  document.querySelector('.guess').value = ''
})

// handles 'Check!' button
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value)

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!'

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct!')

    bodyColor('#60b347')

    number(secretNumber, '30rem')

    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
      score--
      scoreMessage(score)
    } else {
      displayMessage('💥 You lost the game!')
      scoreMessage(0)
    }
  }
})