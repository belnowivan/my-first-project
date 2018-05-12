import readlineSync from 'readline-sync';

export const gameStep = 3;
export const numberRandom = (from, to) => Math.floor((Math.random() * to) + from);
export const askQestionGetAnswer = (questionUser) => {
  console.log(`Question: ${questionUser}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
export const checkAnswer = (userAnswer, question, userName) => {
  if (userAnswer === question) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question}'.\nLet's try again, ${userName}`);
  return false;
};
