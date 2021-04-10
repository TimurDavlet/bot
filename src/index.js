import readlineSync from 'readline-sync';

const start = () => {
  console.log('Привет! Я эмоциональный бот!');
  const name = readlineSync.question('Как тебя зовут? ');
  const mood = readlineSync.question(`${name}, какое у тебя сейчас настроенеие?`);
}

export default start;