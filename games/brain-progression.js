#!/usr/bin/env node

// import gameEngine from "../src";

const randomNumber = () => {
  const result = Math.round(Math.random() * 6);
  return result;
};

const createProgression = (firstNumber, secondNumber) => {
  const array = [];
  let a = firstNumber;
  const b = secondNumber;
  // let result = `${a}`;
  // console.log(result);
  array.push(a);
  for (let i = 0; i < 9; i += 1) {
    a += b;
    // const tempString = ` ${a}`;
    // result = result.concat(tempString);
    array.push(a);
  }
  console.log(array);
  const result = array.join(' ');
  console.log(result);
};

const brainProgression = () => {
  const a = 2; // randomNumber();
  const b = Math.round(Math.random() * 6);
  createProgression(a, b);
};

brainProgression();

// gameEngine();
