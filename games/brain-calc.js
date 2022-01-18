#!/usr/bin/env node

// import gameEngine from '../src/index.js';

const randomNumber = () => {
  const result = Math.round(Math.random() * 200);
  return result;
};

const brainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];
  const questionAnswerPairs = [];

  for (let i = 0; i < 3; i += 1) {
    const bufferArray = [];
    bufferArray.push(randomNumber());
    const randomOperator = Math.round(Math.random() * 2);
    bufferArray.push(operators[randomOperator]);
    bufferArray.push(randomNumber());
    questionAnswerPairs.push(bufferArray);
  }
  console.log(questionAnswerPairs);
  // gameEngine(questionAnswerPairs, gameRules);
};

brainCalc();
