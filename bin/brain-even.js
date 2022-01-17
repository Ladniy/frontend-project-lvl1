#!/usr/bin/env node

import gameEngine from '../src/index.js';

const isEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questionAnswerPairs = [];

  for (let i = 0; i < 3; i += 1) {
    const question = Math.round(Math.random() * 20);
    const answer = question % 2 ? 'no' : 'yes';
    const questionAnswerPair = [];

    questionAnswerPair.push(question);
    questionAnswerPair.push(answer);
    questionAnswerPairs.push(questionAnswerPair);

    // console.log(questionAnswerPairs);
    // console.log(gameRules);
  }
  gameEngine(questionAnswerPairs, gameRules);
};

isEven();
