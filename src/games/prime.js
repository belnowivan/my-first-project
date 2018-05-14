import { cons } from 'hexlet-pairs';
import game from '..';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  if (num === 1) { return false; }
  for (let divisor = 2; divisor * divisor <= num; divisor += 1) {
    if (num % divisor === 0) { return false; }
  }
  return true;
};

const getAnswer = number => (isPrime(number) ? 'yes' : 'no');

const makeTask = () => {
  const getNumber = getRandomNumber(1, 9999);
  const question = `Is this number prime? ${getNumber}`;
  return cons(getAnswer(getNumber), question);
};

const description = 'Answer "yes" if number prime otherwise answer "no"';
export default () => game(makeTask, description);
