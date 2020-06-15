import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const statusEl = document.querySelector('#status')
let game1

// keypress adds to guesses array and rerenders DOM
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    console.log(guess)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    statusEl.textContent = game1.StatusMessage

    game1.Puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle()
    game1 = new Hangman(puzzle, 7)
    render()
    //console.clear()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getPuzzle('1')
    .then((puzzle) => {})
    .catch((err) => {
        console.log(`Error: ${err}`)
    })
