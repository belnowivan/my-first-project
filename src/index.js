import readlineSync from 'readline-sync';

export const UserName = () => {
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!`);
};
export const mainGames = () => {
  console.log('Welcome to the Brain Games!\n');
  UserName();
};
export const welcomeGameCalc = () => console.log('Welcome to Brain Games!\nWhat is the result of the expression?\n');

export const welcomeGameEven = () => console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

export const startGame = (f) => { // Узнаем имя, и передаем в нужную игру.
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);
  f(userName);
};
