const joy = 'Рад, что ты в хорошем настроении!';
const sadness = 'Не грусти!';
const anger = 'Не злись.';

const newDialogue = (emodji) => {
  // eslint-disable-next-line default-case
  switch (emodji) {
    case 'joy':
      console.log(joy);
      break;

    case 'sadness':
      console.log(sadness);
      break;

    case 'anger':
      console.log(anger);
      break;
  }
};

const previousEmojiJoy = (emodji) => {
  // eslint-disable-next-line default-case
  switch (emodji) {
    case 'joy':
      console.log('Хорошее настроение, залог продуктивного дня!');
      break;

    case 'sadness':
      console.log('Не грусти! Куда пропало твое настроение?');
      break;

    case 'anger':
      console.log('Не злись, лучше улыбаться! Куда пропало твое настроение?');
      break;
  }
};

const previousEmojiSadness = (emodji) => {
  // eslint-disable-next-line default-case
  switch (emodji) {
    case 'joy':
      console.log('Рад, что твое настроение улучшилось! Хорошее настроение, залог продуктивного дня!');
      break;

    case 'sadness':
      console.log('Ты все еще грустишь.');
      break;

    case 'anger':
      console.log('Кажется, тебе стало ещё хуже.');
      break;
  }
};

const previousEmojiAnger = (emodji) => {
  // eslint-disable-next-line default-case
  switch (emodji) {
    case 'joy':
      console.log('Рад, что твое настроение улучшилось! Нервные клетки не востанавливаются!');
      break;

    case 'sadness':
      console.log('Злость, грусть. Пора уже улыбнуться!');
      break;

    case 'anger':
      console.log('Ты все еще злишься.');
      break;
  }
};

// eslint-disable-next-line consistent-return
export default (previousEmoji, emotionName) => {
  if (previousEmoji.length === 0) {
    return `Привет. ${newDialogue(emotionName)}`;
  }
  // eslint-disable-next-line default-case
  switch (previousEmoji) {
    case 'joy':
      return previousEmojiJoy(emotionName);

    case 'sadness':
      return previousEmojiSadness(emotionName);

    case 'anger':
      return previousEmojiAnger(emotionName);
  }
};
