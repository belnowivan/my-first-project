import readlineSync from 'readline-sync';
import { askQestionGetAnswer, checkAnswer } from './utils';

export const gameStep = 3;

export const welcomeGame = t => console.log(`Welcome to Brain Games!\n${t}\n`);
export const startGame = (t) => { // Узнаем имя, и передаем в нужную игру.
  welcomeGame(t);
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);
  return (userName);
};

export const main = (userName, question, answer) => {
  for (let i = 0; i < gameStep; i += 1) {
    const task = question();
    const answerTask = answer(task);
    const userAnswer = askQestionGetAnswer(answerTask);
    if (!checkAnswer(userAnswer, answerTask, userName)) { return; }
  }
  console.log(`Congratulations, ${userName}!`);
};
