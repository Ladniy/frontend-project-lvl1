import { gameEngine, numberOfRounds } from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const getNumbersArray = (firstNumber, secondNumber) => {
  const numberOfDigits = 9;
  let a1 = firstNumber;
  const d1 = secondNumber;
  const numbersArray = [];

  numbersArray.push(a1);
  for (let i = 0; i < numberOfDigits; i += 1) {
    a1 += d1;
    numbersArray.push(a1);
  }

  return numbersArray;
};

const brainProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  const questionAndAnswerPairs = [];
  let bufferArray = [];
  let handlerArray = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    bufferArray = [];
    handlerArray = [];
    const a = getRandomNumber(1, 4);
    const d = getRandomNumber(2, 6);

    bufferArray.push(getNumbersArray(a, d));
    const randomItemIndex = getRandomNumber(0, 9);
    const rightAnswer = bufferArray[0][randomItemIndex];

    bufferArray[0][randomItemIndex] = '..';
    handlerArray.push(bufferArray[0].join(' '));
    handlerArray.push(String(rightAnswer));
    questionAndAnswerPairs.push(handlerArray);
  }
  gameEngine(questionAndAnswerPairs, gameRules);
};

export default brainProgression;
