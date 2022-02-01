import gameEngine from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

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
  const randomItemIndex = getRandomNumber(0, 9);
  const rightAnswer = bufferArray[randomItemIndex];

  // Changing a random array item to two points
  bufferArray[randomItemIndex] = '..';

  // Adding items from the buffer array and right answer to result array
  resultArray.push(bufferArray.join(' '));
  resultArray.push(String(rightAnswer));
  return resultArray;
};

const brainProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  const questionAndAnswerPairs = [];
  for (let i = 0; i < 3; i += 1) {
    const a = getRandomNumber(1, 4);
    const d = getRandomNumber(2, 6);
    questionAndAnswerPairs.push(getQuestionAndAnswer(a, d));
  }
  gameEngine(questionAndAnswerPairs, gameRules);
};

export default brainProgression;
