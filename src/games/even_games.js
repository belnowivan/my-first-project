import readlineSync from 'readline-sync';
import { startGame, welcomeGameEven } from '..';

export const numberRandom = () => Math.floor((Math.random() * 100) + 1);
const isEven = number => number % 2 === 0;

const gameEvenProcces = (userName, number = numberRandom(), iter = 1) => {
  const endGame = 3;
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const trueAnswer = isEven(number) ? 'yes' : 'no';
  if (userAnswer === trueAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}`);
    return;
  }
  if (iter === endGame) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  gameEvenProcces(userName, numberRandom(), iter + 1);
};

const startEvenGames = () => {
  welcomeGameEven();
  startGame(gameEvenProcces);
};
export default startEvenGames;
