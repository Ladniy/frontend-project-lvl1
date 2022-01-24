#!/usr/bin/env node

// import gameEngine from "../src";

const randomNumber = () => {
  const result = Math.round(Math.random() * 50);
  return result;
};

const createProgression = (firstNumber, secondNumber) => {
  const a = firstNumber;
  let b = secondNumber;
  let result = `${a}`;
  console.log(result);
  for (let i = 0; i < 9; i += 1) {
    const bNumber = ` ${(b *= 2)}`;
    result = result.concat(bNumber);
  }
  console.log(result);
};

const brainProgression = () => {
  const a = randomNumber();
  const b = Math.round(Math.random() * 4);
  createProgression(a, b);
};

brainProgression();

// gameEngine();
