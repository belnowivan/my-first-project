import { cons, car, cdr } from 'hexlet-pairs';
import { startGame, welcomeGame } from '..';
import { numberRandom, gameStep, askQestionGetAnswer, checkAnswer } from '../utils';

const additionPair = pair => car(pair) + cdr(pair);
const subtraction = pair => car(pair) - cdr(pair);
const multiplication = pair => car(pair) * cdr(pair);
const tostringExpression = (pair, sign) => `${car(pair)} ${sign} ${cdr(pair)}`;

const expressionRandom = () => numberRandom(1, 3);

const gameProccesCalc = (userName, iter = 1) => {
  let sign;
  let answer;
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
  const userAnswer = askQestionGetAnswer(tostringExpression(pairNumbers, sign));
  const checkUserAnswer = checkAnswer(userAnswer, answer, userName);
  if (!checkUserAnswer) { return; }
  if (iter === gameStep) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  gameProccesCalc(userName, iter + 1);
};
const startGameCalc = () => {
  welcomeGame('What is the result of the expression?');
  startGame(gameProccesCalc);
};
export default startGameCalc;
