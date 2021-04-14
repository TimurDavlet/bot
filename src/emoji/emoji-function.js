const getEmojiList = (emojis) => {
  const keys = Object.keys(emojis);
  const emojiList = keys.map((element) => emojis[element]);
  return emojiList.flat();
};

export const hasEmoji = (emojis, emoji) => getEmojiList(emojis).includes(emoji);

// eslint-disable-next-line max-len
export const getEmotionName = (emojis, emoji) => Object.keys(emojis).filter((element) => emojis[element].includes(emoji)).join();
