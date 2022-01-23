#!/usr/bin/env node

import gameEngine from '../src/index.js';

const brainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionAnswerPairs = [];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 20);
    const rightAnswer = randomNumber % 2 ? 'no' : 'yes';
    const bufferArray = [];

    bufferArray.push(randomNumber);
    bufferArray.push(rightAnswer);
    questionAnswerPairs.push(bufferArray);
  }
  gameEngine(questionAnswerPairs, gameRules);
};

brainEven();
