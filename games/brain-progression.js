#!/usr/bin/env node

import gameEngine from '../src/index.js';

const randomNumber = (number = 10) => {
  const result = Math.round(Math.random() * number);
  return result;
};

const getQuestionAndAnswer = (firstNumber, secondNumber) => {
  let a1 = firstNumber;
  const d1 = secondNumber;
  const resultArray = [];
  const bufferArray = [];

  // Adding items to an bufferArray
  bufferArray.push(a1);
  for (let i = 0; i < 9; i += 1) {
    a1 += d1;
    bufferArray.push(a1);
  }

  // Geting random array index and right answer
  const randomArrayIndex = randomNumber(9);
  const rightAnswer = bufferArray[randomArrayIndex];

  // Changing a random array item to two points
  bufferArray[randomArrayIndex] = '..';

  // Pushing items from the buffer array and right answer to result array
  resultArray.push(bufferArray.join(' '));
  resultArray.push(String(rightAnswer));
  return resultArray;
};

const brainProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  const questionAndAnswerPairs = [];
  for (let i = 0; i < 3; i += 1) {
    const a = randomNumber(2);
    const d = randomNumber(6);
    questionAndAnswerPairs.push(getQuestionAndAnswer(a, d));
  }
  gameEngine(questionAndAnswerPairs, gameRules);
};

brainProgression();
