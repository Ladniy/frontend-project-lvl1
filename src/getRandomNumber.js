// Function for generate random nubmers, inclusive man and max integers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomNumber;
