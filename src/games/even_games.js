import { startGame, welcomeGame } from '..';
import { numberRandom, gameStep, askQestionGetAnswer, checkAnswer, gameOver } from '../utils';

const isEven = number => number % 2 === 0;

const gameEvenProcces = (userName, iter = 1) => {
  const question = numberRandom(1, 100);
  const userAnswer = askQestionGetAnswer(question);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  if (!checkAnswer(userAnswer, trueAnswer, userName)) { return; }
  if (gameOver(gameStep, iter, userName)) { return; }

  gameEvenProcces(userName, iter + 1);
};
const startEvenGames = () => {
  welcomeGame('Answer "yes" if number even otherwise answer "no"');
  startGame(gameEvenProcces);
};
export default startEvenGames;
