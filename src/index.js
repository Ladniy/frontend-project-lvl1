import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

// Main game engine function
export const gameEngine = (array, rules) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${username}!\n${rules}`);

  // Compresion answers
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, rightAnswer] = array[i];

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
