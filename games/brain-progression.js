#!/usr/bin/env node

// import gameEngine from "../src";

const randomNumber = () => {
  const result = Math.round(Math.random() * 2);
  return result;
};

const createProgression = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  let result = `${a}`;
  console.log(result);
  for (let i = 0; i < 9; i += 1) {
    b += b;
    const tempString = ` ${(a + b)}`;
    result = result.concat(tempString);
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
