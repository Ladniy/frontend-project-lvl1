import { gameEngine, getRandomNumber } from '../index.js';

const getRightAnswer = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  let rightAnswer = 0;

  // Finding GCD by subtraction algorithm
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
    const firstNumber = getRandomNumber(1, 50);
    const secondNumber = getRandomNumber(1, 50);
    const question = `${firstNumber} ${secondNumber}`;

    // Adding question and answer to an buffer array
    bufferArray.push(question);
    bufferArray.push(getRightAnswer(firstNumber, secondNumber).toString());

    // Adding a buffer array to an question and answer pair array
    questionAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAnswerPairs, gameRules);
};

export default brainGcd;
