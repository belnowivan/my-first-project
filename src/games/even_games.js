import { cons } from 'hexlet-pairs';
import Game from '..';
import { numberRandom } from '../utils';

const isEven = number => number % 2 === 0;

const splitAnswerQestion = () => {
  const question = (numberRandom(1, 100));
  const answer = (isEven(question)) ? 'yes' : 'no';
  return cons(answer, question);
};

const startEvenGames = () => {
  Game(splitAnswerQestion, 'Answer "yes" if number even otherwise answer "no".');
};
export default startEvenGames;
