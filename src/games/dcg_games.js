import { cons } from 'hexlet-pairs';
import Game from '..';
import numberRandom from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const dcg = (a, b) => {
  if (b === 0) { return Math.abs(a); }
  return dcg(b, a % b);
};

const makeGcdAnswerQestion = () => {
  const a = numberRandom(1, 100);
  const b = numberRandom(1, 100);
  return cons(String(dcg(a, b)), `${a} ${b}`);
};

const startGame = () => Game(makeGcdAnswerQestion, rules);
export default startGame;
