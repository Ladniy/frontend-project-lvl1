import { gameEngine, getRandomNumber } from '../src/index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const number = getRandomNumber(0, 2);
  const result = operators[number];
  return result;
};

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

const brainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const questionAnswerPairs = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomNumber(0, 30);
    const secondNumber = getRandomNumber(0, 30);
    const operator = getRandomOperator();

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

brainCalc();
