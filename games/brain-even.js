import { gameEngine, getRandomNumber } from '../src/index.js';

const brainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionAnswerPairs = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(0, 20);

    // Geting right answer
    const rightAnswer = randomNumber % 2 ? 'no' : 'yes';

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
