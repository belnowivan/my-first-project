import readlineSync from 'readline-sync';

export const welcomeGame = t => console.log(`Welcome to Brain Games!\n${t}\n`);
export const startGame = (f) => { // Узнаем имя, и передаем в нужную игру.
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);
  f(userName);
};
