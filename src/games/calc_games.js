import { cons } from 'hexlet-pairs';
import Game from '..';
import numberRandom from '../utils';

const expressionRandom = () => numberRandom(1, 3);

const randomTask = () => {
  switch (expressionRandom()) {
    case 1: {
      const a = numberRandom(1, 100);
      const b = numberRandom(1, 100);
      return cons(String(a + b), `${a} + ${b}`);
    }
    case 2: {
      const a = numberRandom(1, 100);
      const b = numberRandom(1, 100);
      return cons(String(a - b), `${a} - ${b}`);
    }
    default: {
      const a = numberRandom(1, 100);
      const b = numberRandom(1, 100);
      return cons(String(a * b), `${a} * ${b}`);
    }
  }
};

const rules = 'What is the result of the expression?';
const startGame = () => Game(randomTask, rules);
export default startGame;
