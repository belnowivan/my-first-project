import { cons } from 'hexlet-pairs';
import game from '..';
import getRandomNumber from '../utils';

const expressionRandom = () => getRandomNumber(1, 3);

const randomTask = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);
  switch (expressionRandom()) {
    case 1: {
      return cons(String(a + b), `${a} + ${b}`);
    }
    case 2: {
      return cons(String(a - b), `${a} - ${b}`);
    }
    default: {
      return cons(String(a * b), `${a} * ${b}`);
    }
  }
};

const description = 'What is the result of the expression?';
export default () => game(randomTask, description);
