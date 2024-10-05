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

const generateDateToDateFrom = (dateFromInput, dateToInput) => {
  const dateFrom = dayjs(dateFromInput);
  const dateTo = dayjs(dateToInput);

  return {
    dateFrom: dateFrom.isAfter(dateTo) ? dateTo.toDate() : dateFrom.toDate(),
    dateTo: dateFrom.isAfter(dateTo) ? dateFrom.toDate() : dateTo.toDate(),
  };
};

const getFormattedDate = (date, format) => dayjs(date).format(format);

const getDuration = (dateFrom, dateTo) => {
  const durationInMinutes = dayjs(dateTo).diff(dayjs(dateFrom), 'minute');
  const days = Math.floor(durationInMinutes / (24 * 60));
  const hours = Math.floor((durationInMinutes % (24 * 60)) / 60);
  const minutes = durationInMinutes % 60;

  if (days > 0) {
    return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  } else if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  } else {
    return `${minutes.toString().padStart(2, '0')}M`;
  }
};

const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const getFilterStatus = (points) => {
  const currentDate = dayjs();


  return {
    isPointsFuture: points.some((point) => dayjs(point.dateFrom).isAfter(currentDate)),
    isPointsPresent: points.some((point) => dayjs(point.dateFrom).isSame(currentDate)),
    isPointsPast: points.some((point) => dayjs(point.dateTo).isBefore(currentDate)),
  };
};

const updateItem = (items, update) => items.map((item) => item.id === update.id ? update : item);


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
  getFilterStatus,
  updateItem,
};


