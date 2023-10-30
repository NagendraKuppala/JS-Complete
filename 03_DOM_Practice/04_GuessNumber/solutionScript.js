const guessNumber = document.querySelector(".guessField")
const guess = document.querySelector("#subt")
const previousGuess = document.querySelector(".lastResult")
const remainingGuess = document.querySelector(".guesses")
const guessLowOrHi = document.querySelector(".lowOrHi")

const randomNumber = parseInt((Math.random()*100 +1))

