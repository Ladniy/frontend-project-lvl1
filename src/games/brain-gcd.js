import { gameEngine, numberOfRounds } from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

// Finding GCD with Euclid's Algorithm and Recursion
const getRightAnswer = (firstNumber, secondNumber) => {
  let rightAnswer;

  if (firstNumber === secondNumber) {
    rightAnswer = firstNumber;
  } else if (firstNumber > secondNumber) {
    rightAnswer = getRightAnswer(firstNumber - secondNumber, secondNumber);
  } else if (firstNumber < secondNumber) {
    rightAnswer = getRightAnswer(firstNumber, secondNumber - firstNumber);
  }

  return rightAnswer;
};

const brainGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const questionAnswerPairs = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
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
