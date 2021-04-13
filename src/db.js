import * as fs from 'fs';
import sql from 'mysql2';

const { createConnection } = sql;

const connection = createConnection({
  host: 'rc1b-thm18ujozxy4tdsw.mdb.yandexcloud.net',
  port: 3306,
  user: 'user2',
  password: 'user178239',
  database: 'db2',
  ssl: {
    ca: fs.readFileSync('../.mysql/root.crt'),
  },
});

// тестирование подключения
// eslint-disable-next-line consistent-return
connection.connect((err) => {
  if (err) {
    return console.error(`Ошибка: ${err.message}`);
  }
  console.log('Подключение к серверу MySQL успешно установлено');
});
// закрытие подключения
// eslint-disable-next-line consistent-return
connection.end((err) => {
  if (err) {
    return console.log(`Ошибка: ${err.message}`);
  }
  console.log('Подключение закрыто');
});
