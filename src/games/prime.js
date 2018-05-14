import { cons } from 'hexlet-pairs';
import game from '..';
import getRandomNumber from '../utils';

const isPrime = (num) => {
  if (num < 2) { return false; }
  let divisor = 2;
  let sqaerDivisor = divisor ** 2;
  for (;sqaerDivisor <= num; divisor += 1) {
    sqaerDivisor = divisor ** 2;
    if (num % divisor === 0) { return false; }
  }
  return true;
};
const getAnswer = number => (isPrime(number) ? 'yes' : 'no');

const makeTask = () => {
  const randomNumber = getRandomNumber(1, 9999);
  const question = `Is this number prime? ${randomNumber}`;
  return cons(getAnswer(randomNumber), question);
};

const description = 'Answer "yes" if number prime otherwise answer "no"';
export default () => game(makeTask, description);
