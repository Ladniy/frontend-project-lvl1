import readlineSync from 'readline-sync';
import numberOfRounds from './numberOfRounds.js';

// Main game engine function
const gameEngine = (array, rules) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${username}!\n${rules}`);

  // Compresion and counting answers
  let rightAnswersCount = 0;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const userAnswer = readlineSync.question(`Question: ${array[i][0]}\nYour answer: `);
    if (array[i][1] === userAnswer) {
      console.log('Correct!');
      rightAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${array[i][1]}'\nLet's try again, ${username}!`);
      break;
    }
  }

  // Checking answers count and show message of game ending
  if (rightAnswersCount === 3) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default gameEngine;
