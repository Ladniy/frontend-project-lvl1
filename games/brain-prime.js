import { gameEngine, getRandomNumber } from '../src/index.js';

const getQuestionAndAnswer = (num) => {
  const bufferArray = [];
  let rightAnswer = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      rightAnswer = 'no';
      break;
    }
  }

  // Adding items to an bufferArray
  bufferArray.push(String(num));
  bufferArray.push(rightAnswer);
  return bufferArray;
};

const brainPrime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questionAndAnswerPairs = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(1, 60);
    questionAndAnswerPairs.push(getQuestionAndAnswer(randomNumber));
  }
  gameEngine(questionAndAnswerPairs, gameRules);
};

export default brainPrime;
