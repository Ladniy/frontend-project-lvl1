#!/usr/bin/env node

import gameEngine from '../src/index.js';

const randomNumber = (number = 10) => {
  const result = Math.round(Math.random() * number);
  return result;
};

const getQuestionAndAnswer = (firstNumber, secondNumber) => {
  let a = firstNumber;
  const d = secondNumber;
  const resultArray = [];
  const bufferArray = [];

  // Adding items to an bufferArray
  bufferArray.push(a);
  for (let i = 0; i < 9; i += 1) {
    a += d;
    bufferArray.push(a);
  }
  const randomArrayIndex = randomNumber(9);
  const rightAnswer = bufferArray[randomArrayIndex];
  bufferArray[randomArrayIndex] = '..';
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
