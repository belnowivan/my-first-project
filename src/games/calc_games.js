import { cons, car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import { startGame, welcomeGameCalc } from '..';
import { numberRandom, gameStep } from './even_games';

const makePair = (a, b) => cons(a, b);
const additionPair = pair => car(pair) + cdr(pair);
const subtraction = pair => car(pair) - cdr(pair);
const multiplication = pair => car(pair) * cdr(pair);
const tostringExpression = (pair, sign) => `${car(pair)} ${sign} ${cdr(pair)}`;

const expressionRandom = () => Math.floor((Math.random() * 3) + 1);

const gameProccesCalc = (userName, iter = 1) => {
  let sign;
  let answer;
  const pairNumbers = makePair(numberRandom(), numberRandom());
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
  console.log(`Question: ${tostringExpression(pairNumbers, sign)}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}`);
    return;
  }
  if (iter === gameStep) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  gameProccesCalc(userName, iter + 1);
};
const startGameCalc = () => {
  welcomeGameCalc();
  startGame(gameProccesCalc);
};
export default startGameCalc;
