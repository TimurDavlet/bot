import * as fs from 'fs';

const writeData = (massage) => {
  const now = new Date();
  const date = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`;
  fs.appendFileSync('log.txt', `${massage}   ${date}\n`, (error) => {
    if (error) throw error; // если возникла ошибка
  });
};

export default writeData;
