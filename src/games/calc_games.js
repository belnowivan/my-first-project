import { cons, car, cdr } from 'hexlet-pairs';
import { numberRandom } from '../utils';

const additionPair = pair => car(pair) + cdr(pair);
const subtraction = pair => car(pair) - cdr(pair);
const multiplication = pair => car(pair) * cdr(pair);
const tostringExpression = (pair, sign) => `${car(pair)} ${sign} ${cdr(pair)}`;

const expressionRandom = () => numberRandom(1, 3);
let answer;
let sign;
const pairNumbers = cons(numberRandom(1, 100), numberRandom(1, 100));
switch (expressionRandom()) {
  case 1:
    answer = String(additionPair(pairNumbers));
    sign = '+';
    break;
  case 2:
    answer = String(subtraction(pairNumbers));
    sign = '-';
    break;
  default:
    answer = String(multiplication(pairNumbers));
    sign = '*';
    break;
}
