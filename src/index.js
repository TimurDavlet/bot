import readlineSync from 'readline-sync';
import { hasEmoji, getEmotionName } from './emoji/emoji-function.js';
import respondToEmotion from './emoji/answers.js';
import writeData from './writing-to-file.js';

const startBot = (emojis, previousEmoji = '') => {
  const unclear = 'Бот: Я тебя не понимаю 😔\nБеседа обнуляется';
  const smile = readlineSync.question('Вы: ');
  writeData(`Вы: ${smile}`);
  if (!hasEmoji(emojis, smile)) {
    console.log(unclear);
    writeData(unclear);
    writeData('--------\n');
    return startBot(emojis);
  }
  const emotionName = getEmotionName(emojis, smile);
  const botAnswer = respondToEmotion(previousEmoji, emotionName);
  console.log(botAnswer);
  writeData(`Бот: ${botAnswer}`);
  return startBot(emojis, emotionName);
};

export default startBot;
