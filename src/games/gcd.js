import { cons } from 'hexlet-pairs';
import game from '..';
import getRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const dcg = (a, b) => {
  if (b === 0) { return Math.abs(a); }
  return dcg(b, a % b);
};

const makeGcdAnswerQestion = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  return cons(String(dcg(a, b)), `${a} ${b}`);
};

export default () => game(makeGcdAnswerQestion, description);
