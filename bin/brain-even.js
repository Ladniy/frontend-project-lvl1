#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${username}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  const roundsCounter = 3;
  for (let i = 0; i < roundsCounter; i += 1) {
    const randomNumber = Math.round(Math.random() * 20);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

    let rightAnswer = '';
    if (randomNumber % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${username}!`);
      break;
    }

    if (i === roundsCounter - 1) {
      console.log(`Congratulations, ${username}!`);
    }
  }
};

isEven();
