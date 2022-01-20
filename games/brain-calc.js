#!/usr/bin/env node

import gameEngine from '../src/index.js';

// Functon to generate a random number
const randomNumber = () => {
  const result = Math.round(Math.random() * 30);
  return result;
};

// Function to generate a random operator
const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const number = Math.round(Math.random() * 2);
  const result = operators[number];
  return result;
};

// Function to get the correct expression answer
const getRightAnswer = (firstNumber, secondNumber, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return result;
};

// Main function with game logic
const brainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const questionAnswerPairs = [];

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const operator = randomOperator();

    // Get string with expression
    const expressionString = `${firstNumber} ${operator} ${secondNumber}`;

    // Creating buffer array and push items
    const bufferArray = [];
    bufferArray.push(expressionString);
    const rightAnswer = getRightAnswer(firstNumber, secondNumber, operator);
    bufferArray.push(rightAnswer.toString());
    questionAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAnswerPairs, gameRules);
};

brainCalc();
