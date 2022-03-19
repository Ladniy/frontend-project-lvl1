import { gameEngine, numberOfRounds } from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const operators = ['+', '-', '*'];

const getRightAnswer = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      break;
  }

  return null;
};

const brainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const questionAnswerPairs = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNumber = getRandomNumber(0, 30);
    const secondNumber = getRandomNumber(0, 30);
    const randomNumber = getRandomNumber(0, operators.length - 1);
    const randomOperator = operators[randomNumber];
    const operator = randomOperator;

    // Get string with expression
    const expressionString = `${firstNumber} ${operator} ${secondNumber}`;

    // Creating buffer array and add items
    const bufferArray = [];
    bufferArray.push(expressionString);
    const rightAnswer = getRightAnswer(firstNumber, secondNumber, operator);
    bufferArray.push(rightAnswer.toString());

    // Adding a buffer array to an question and answer pair array
    questionAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAnswerPairs, gameRules);
};

export default brainCalc;
