import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word) || VALID_GUESSES.includes(word)
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  //const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  //const now = Date.now()
  //const msInDay = 86400000
  const index = Math.floor(Math.random() * WORDS.length)
  const nextday = 1

  return {
    solution: WORDS[index % WORDS.length],
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
