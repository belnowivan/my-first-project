import { cons } from 'hexlet-pairs';
import game from '..';
import getRandomNumber from '../utils';

const description = 'Balance the given number.';

const reducerFunc = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
const sumNumber = num => String(num).split('').reduce(reducerFunc);

const balance = (number) => {
  const numLength = String(number).length;
  const supportBalance = (sum, iter, result = '') => {
    if (iter === 0) { return result; }
    const newNumber = Math.floor(sum / iter);
    return supportBalance(sum - newNumber, iter - 1, result + String(newNumber));
  };
  return supportBalance(sumNumber(number), numLength);
};

const makeGcdAnswerQestion = () => {
  const valueForQestion = getRandomNumber(1, 9999);
  return cons(balance(valueForQestion), valueForQestion);
};

export default () => game(makeGcdAnswerQestion, description);
