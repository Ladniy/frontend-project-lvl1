import readlineSync from 'readline-sync';

// Function for generate random nubmers, inclusive man and max integers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main game engine function
const gameEngine = (array, rules) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${username}!\n${rules}`);

  // Compresion and counting answers
  let rightAnswersCount = 0;
  for (let i = 0; i < 3; i += 1) {
    const userAnswer = readlineSync.question(`Question: ${array[i][0]}\nYour answer: `);
    if (array[i][1] === userAnswer) {
      console.log('Correct!');
      rightAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${array[i][1]}'`);
      break;
    }
  }

  // Checking answers count and show message of game ending
  if (rightAnswersCount === 3) {
    console.log(`Congratulations, ${username}`);
  }
};

export { gameEngine, getRandomNumber };
