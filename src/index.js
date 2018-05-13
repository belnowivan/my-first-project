import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const askQestionGetAnswer = (questionUser) => {
  console.log(`Question: ${questionUser}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
const getUserNAme = () => {
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);
  return (userName);
};

const gameStep = 3;

const Game = (games, ruls) => {
  console.log(`Welcome to Brain Games!\n${ruls}\n`);
  const userName = getUserNAme();
  for (let i = 0; i < gameStep; i += 1) {
    const GameStepData = games();
    const question = cdr(GameStepData);
    const userAnswer = askQestionGetAnswer(question);
    const AnswerGame = car(GameStepData);
    if (userAnswer === AnswerGame) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${AnswerGame}'.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default Game;
