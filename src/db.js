import * as fs from 'fs';
import sql from 'mysql2';

const { createConnection } = sql;

export const connection = createConnection({
  host: 'rc1b-thm18ujozxy4tdsw.mdb.yandexcloud.net',
  port: 3306,
  user: 'user2',
  password: 'user178239',
  database: 'db2',
  ssl: {
    ca: fs.readFileSync('./.mysql/root.crt'),
  },
});

// тестирование подключения
// eslint-disable-next-line consistent-return
/* connection.connect((err) => {
  if (err) {
    return console.error(`Ошибка: ${err.message}`);
  }
  console.log('Подключение к серверу MySQL успешно установлено');
}); */
// закрытие подключения
// eslint-disable-next-line consistent-return
/* connection.end((err) => {
  if (err) {
    return console.log(`Ошибка: ${err.message}`);
  }
  console.log('Подключение закрыто');
}); */

export const writeToBase = (StartTime, EndTime, Message) => {
  // eslint-disable-next-line consistent-return
  connection.connect((err) => {
    if (err) {
      return console.error(`Ошибка: ${err.message}`);
    }
  });
  const data = [
    [StartTime, EndTime, Message],
  ];
  const msql = 'INSERT INTO Messages(StartTime, EndTime, Message) VALUES ?';
  connection.query(msql, [data], (err) => {
    if (err) console.log(err);
    // console.log(results);
  });
  connection.end();
};

export const displayDatabaseData = () => {
  const msql = 'SELECT * FROM Messages';
  connection.query(msql, (err, results) => {
    if (err) console.log(err);
    console.log(results);
  });
};
