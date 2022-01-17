#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gameEngine = (array, rules) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${username}!\n${rules}`);
  // console.log(rules);
  // Compresion and counting answers
  let rightAnswersCount = 0;
  for (const item of array) {
    const userAnswer = readlineSync.question(`Question: ${item[0]}\nYour answer: `);
    if (item[1] === userAnswer) {
      console.log('Correct!');
      rightAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${item[1]}'`);
      break;
    }
  }
  // Message of game ending
  if (rightAnswersCount === 3) {
    console.log(`Congratulations, ${username}`);
  }
};

export default gameEngine;
