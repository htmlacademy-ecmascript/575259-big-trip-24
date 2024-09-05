const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomPhotoUrl = () => `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 1000)}`;

export { getRandomArrayElement, getRandomPhotoUrl };
