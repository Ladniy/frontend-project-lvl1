#!/usr/bin/env node

import gameEngine from '../src/index.js';

// Functon to generate a random number
const randomNumber = () => {
  const result = Math.round(Math.random() * 30);
  return result;
};

const brainGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  gameEngine(questionAnswerPairs, gameRules);
};

brainGcd();
