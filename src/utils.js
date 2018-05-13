import readlineSync from 'readline-sync';

export const numberRandom = (from, to) => Math.floor((Math.random() * to) + from);

export const askQestionGetAnswer = (questionUser) => {
  console.log(`Question: ${questionUser}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
export const getUserNAme = () => {
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);
  return (userName);
};
