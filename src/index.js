import readlineSync from 'readline-sync';
import { hasEmoji, getEmotionName } from './emoji/emoji-function.js';
import respondToEmotion from './emoji/answers.js';

const startBot = (emojis, previousEmoji = '') => {
  const smile = readlineSync.question('Вы: ');
  if (!hasEmoji(emojis, smile)) {
    console.log('Бот: Я тебя не понимаю 😔');
    console.log('Беседа обнуляется');
    return startBot(emojis);
  }
  const emotionName = getEmotionName(emojis, smile);
  respondToEmotion(previousEmoji, emotionName);
  return startBot(emojis, emotionName);
};

export default startBot;
