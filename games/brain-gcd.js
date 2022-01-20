#!/usr/bin/env node

// import gameEngine from '../src/index.js';

// Functon to generate a random number
const randomNumber = () => {
  const result = Math.round(Math.random() * 50);
  return result;
};

const brainGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const questionAnswerPairs = [];

  let firstNumber = randomNumber();
  let secondNumber = randomNumber();
  let result = 0;
  console.log(firstNumber);
  console.log(secondNumber);
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  result = firstNumber;
  console.log(result);
  // gameEngine(questionAnswerPairs, gameRules);
};

brainGcd();
