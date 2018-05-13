import { cons, car, cdr } from 'hexlet-pairs';
import Game from '..';
import { numberRandom } from '../utils';

const additionPair = pair => car(pair) + cdr(pair);
const subtraction = pair => car(pair) - cdr(pair);
const multiplication = pair => car(pair) * cdr(pair);
const tostringExpression = (pair, sign) => `${car(pair)} ${sign} ${cdr(pair)}`;

const expressionRandom = () => numberRandom(1, 3);

const pairNumbers = () => cons(numberRandom(1, 100), numberRandom(1, 100));
const randomTask = () => {
  switch (expressionRandom()) {
    case 1: {
      const SavePairNumbers = pairNumbers();
      return cons((additionPair(SavePairNumbers)), tostringExpression(SavePairNumbers, '+'));
    }
    case 2: {
      const SavePairNumbers = pairNumbers();
      return cons(subtraction(SavePairNumbers), tostringExpression(SavePairNumbers, '-'));
    }
    default: {
      const SavePairNumbers = pairNumbers();
      return cons(multiplication(SavePairNumbers), tostringExpression(SavePairNumbers, '*'));
    }
  }
};

const splitAnswerQestion = () => {
  const saveTask = randomTask();
  const question = (cdr(saveTask));
  const answer = String(car(saveTask));
  return cons(answer, question);
};
const startGameCalc = () => {
  Game(splitAnswerQestion, 'What is the result of the expression?');
};
export default startGameCalc;
