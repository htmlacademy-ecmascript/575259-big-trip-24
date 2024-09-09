import dayjs from 'dayjs';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomPhotoUrl = () => `https://loremflickr.com/248/152?random=${Math.floor(Math.random() * 1000)}`;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomBoolean = () => Math.random() >= 0.5;

const getRandomDateBetween = (start, end) => {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  const diffInMilliseconds = endDate.diff(startDate);
  const randomMilliseconds = Math.floor(Math.random() * diffInMilliseconds);
  return startDate.add(randomMilliseconds, 'millisecond').toDate();
};

const generateDateToDateFrom = (date1, date2) => {
  const d1 = dayjs(date1);
  const d2 = dayjs(date2);

  return {
    dateFrom: d1.isAfter(d2) ? d2.toDate() : d1.toDate(),
    dateTo: d1.isAfter(d2) ? d1.toDate() : d2.toDate(),
  };
};

const getFormattedDate = (date, format) => dayjs(date).format(format);

const getDuration = (dateFrom, dateTo) => {
  const durationInMinutes = dayjs(dateTo).diff(dayjs(dateFrom), 'minute');
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  if (hours === 0) {
    return `${minutes}M`;
  }

  return `${hours}H ${minutes}M`;
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export {
  getRandomArrayElement,
  getRandomPhotoUrl,
  getFormattedDate,
  getDuration,
  capitalizeFirstLetter,
  getRandomInteger,
  getRandomBoolean,
  getRandomDateBetween,
  generateDateToDateFrom,
};
