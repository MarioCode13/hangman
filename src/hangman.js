class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('') //string to array
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    calcStatus() {
        let finished = true
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
            } else {
                finished = false
            }
        })

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get StatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Game Over. The word was ${this.word.join('')}`
        } else {
            return ' Congratulations. You win!'
        }
    }

    get Puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        const isFailed = this.status !== 'playing'
        if (isFailed) {
            return
        }

        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        //decrement remaining guesses
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.calcStatus()
    }
}

export { Hangman as default }
