import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const gamesCount = 3;

const game = (gameData, description) => {
  console.log(`Welcome to Brain Games!\n${description}\n`);

  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < gamesCount; i += 1) {
    const GameStepData = gameData();
    const question = cdr(GameStepData);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = car(GameStepData);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default game;
