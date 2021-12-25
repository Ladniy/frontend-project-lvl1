import readlineSync from 'readline-sync';

const greeting = () => {
  const username = readlineSync.question('May i have your name? ');
  console.log(`Hi ${username}!`);
};

export default greeting;
