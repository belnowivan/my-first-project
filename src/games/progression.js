import { cons } from 'hexlet-pairs';
import game from '..';
import getRandomNumber from '../utils';

const description = 'What number is missing in this progression?.';

const progression = () => {
  const progressionRandomStar = getRandomNumber(1, 10);
  const progressionLength = 10;
  const progressionStep = getRandomNumber(1, 10);
  const randomMissingNumber = getRandomNumber(1, 10);
  const getProgression = (iter, step, result) => {
    if (iter === progressionLength) { return result; }
    if (iter === randomMissingNumber) {
      return getProgression(iter + 1, step + progressionStep, `${result} ..`);
    }
    return getProgression(iter + 1, step + progressionStep, `${result} ${String(step)}`);
  };
  const answer = String(progressionRandomStar + (progressionStep * randomMissingNumber));
  const question = getProgression(0, progressionRandomStar, '');
  return cons(answer, question);
};
export default () => game(progression, description);
