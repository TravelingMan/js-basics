const min = 1
const max = 5

let random = Math.floor(Math.random() * (max - min + 1)) + min

function makeGuess(guess) {
  if (guess === random) {
    return 'Correct!'
  } else if (guess > random) {
    return 'Computer guessed too HIGH.'
  } else {
    return 'Computer guessed too LOW.'
  }
}

console.log(makeGuess(3))