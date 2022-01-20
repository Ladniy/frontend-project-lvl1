#!/usr/bin/env node

import gameEngine from '../src/index.js';

// Functon to generate a random number
const randomNumber = () => {
  const result = Math.round(Math.random() * 50);
  return result;
};

const getRightAnswer = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  let rightAnswer = 0;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  rightAnswer = a;
  return rightAnswer;
};

const brainGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const questionAnswerPairs = [];

  for (let i = 0; i < 3; i += 1) {
    const bufferArray = [];
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const question = `${firstNumber} ${secondNumber}`;
    // console.log(question);
    bufferArray.push(question);
    bufferArray.push(getRightAnswer(firstNumber, secondNumber).toString());
    questionAnswerPairs.push(bufferArray);
    console.log(questionAnswerPairs);
  }
  gameEngine(questionAnswerPairs, gameRules);
};

brainGcd();
