#!/usr/bin/env node

import gameEngine from '../src/index.js';

const randomNumber = (number = 10) => {
  const result = Math.round(Math.random() * number);
  return result;
};

const getProgressionAndRightAnswer = (firstNumber, secondNumber) => {
  let a = firstNumber;
  const b = secondNumber;
  const array = [];
  const bufferArray = [];
  const questionArray = [];
  questionArray.push(a);
  for (let i = 0; i < 9; i += 1) {
    a += b;
    questionArray.push(a);
  }
  const randomArrayIndex = randomNumber(9);
  const rightAnswer = questionArray[randomArrayIndex];
  questionArray[randomArrayIndex] = '..';
  bufferArray[0] = questionArray.join(' ');
  array.push(bufferArray);
  array[0][1] = rightAnswer.toString();
  return bufferArray;
};

const brainProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    const a = randomNumber(2);
    const b = randomNumber(6);
    array.push(getProgressionAndRightAnswer(a, b));
  }
  console.log(array);
  gameEngine(array, gameRules);
};

brainProgression();
