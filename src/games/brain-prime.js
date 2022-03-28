import { gameEngine, numberOfRounds } from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isNumberPrime = (num) => {
  let result = true;

  if (num === 1) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }

  return result;
};

const brainPrime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let bufferArray = [];
  const questionAndAnswerPairs = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    bufferArray = [];
    const randomNumber = getRandomNumber(1, 60);
    bufferArray.push(String(randomNumber));
    if (isNumberPrime(randomNumber) === true) {
      bufferArray.push('yes');
    } else {
      bufferArray.push('no');
    }
    questionAndAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAndAnswerPairs, gameRules);
};

export default brainPrime;
