import readlineSync from 'readline-sync';

const numberRandom = () => Math.floor((Math.random() * 100) + 1);


const gameProcces = (number, iter = 1, userName) => {
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const numberCheck = (number % 2 === 0) ? 'yes' : 'no';
  if (userAnswer === numberCheck) {
    console.log('Correct!');
  } else {
    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
  }
  if (iter === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  return gameProcces(numberRandom(), iter + 1, userName);
};
const getUserName = () => {
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);
  gameProcces(numberRandom(), 1, userName);
};

export default getUserName;
