const joy = 'Рад, что ты в хорошем настроении!';
const sadness = 'Не грусти!';
const anger = 'Не злись.';

// eslint-disable-next-line consistent-return
const newDialogue = (emodji) => {
  // eslint-disable-next-line default-case
  switch (emodji) {
    case 'joy':
      return joy;

    case 'sadness':
      return sadness;

    case 'anger':
      return anger;
  }
};

// eslint-disable-next-line consistent-return
const previousEmojiJoy = (emodji) => {
  // eslint-disable-next-line default-case
  switch (emodji) {
    case 'joy':
      return 'Хорошее настроение, залог продуктивного дня!';

    case 'sadness':
      return 'Не грусти! Куда пропало твое настроение?';

    case 'anger':
      return 'Не злись, лучше улыбаться! Куда пропало твое настроение?';
  }
};

// eslint-disable-next-line consistent-return
const previousEmojiSadness = (emodji) => {
  // eslint-disable-next-line default-case
  switch (emodji) {
    case 'joy':
      return 'Рад, что твое настроение улучшилось! Хорошее настроение, залог продуктивного дня!';

    case 'sadness':
      return 'Ты все еще грустишь.';

    case 'anger':
      return 'Кажется, тебе стало ещё хуже.';
  }
};

// eslint-disable-next-line consistent-return
const previousEmojiAnger = (emodji) => {
  // eslint-disable-next-line default-case
  switch (emodji) {
    case 'joy':
      return 'Рад, что твое настроение улучшилось! Нервные клетки не востанавливаются!';

    case 'sadness':
      return 'Злость, грусть. Пора уже улыбнуться!';

    case 'anger':
      return 'Ты все еще злишься.';
  }
};

// eslint-disable-next-line consistent-return
export default (previousEmoji, emotionName) => {
  if (previousEmoji.length === 0) {
    const dialog = newDialogue(emotionName);
    return `Привет. ${dialog}`;
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
