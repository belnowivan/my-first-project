import { startGame, main } from '..';
import { numberRandom } from '../utils';

const isEven = number => number % 2 === 0;

const question = () => numberRandom(1, 100);
const trueAnswer = (quest) => {
  if (isEven(quest)) { return 'yes'; }
  return 'no';
};


const startEvenGames = () => {
  const userName = startGame('Answer "yes" if number even otherwise answer "no"');
  main(userName, question, trueAnswer);
};
export default startEvenGames;
