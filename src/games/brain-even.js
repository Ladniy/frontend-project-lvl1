import { gameEngine, numberOfRounds } from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const brainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionAnswerPairs = [];

  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNumber = getRandomNumber(0, 20);

    // Geting right answer
    const rightAnswer = isEven(randomNumber) === true ? 'yes' : 'no';

    // Creating buffer array and add items
    const bufferArray = [];
    bufferArray.push(randomNumber);
    bufferArray.push(rightAnswer);

    // Adding a buffer array to an question and answer pair array
    questionAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAnswerPairs, gameRules);
};

export default brainEven;
