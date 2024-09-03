const SORT_FILTERS = [
  {name: 'day', isChecked: true},
  {name: 'event', isChecked: false},
  {name: 'time', isChecked: false},
  {name: 'price', isChecked: false},
  {name: 'offers', isChecked: false},
];

const FILTERS = [
  {name: 'everything', isChecked: true},
  {name: 'future', isChecked: false},
  {name: 'present', isChecked: false},
  {name: 'past', isChecked: false},
];

const POINTS_COUNT = 3;

const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const OFFERS = [
  {title: 'Add luggage', price: 30, name: 'luggage', isChecked: true },
  {title: 'Switch to comfort class', price: 100, name: 'comfort', isChecked: false },
  {title: 'Add meal', price: 15, name: 'meal', isChecked: false },
  {title: 'Choose seats', price: 5, name: 'seats', isChecked: false},
  {title: 'Travel by train', price: 40, name: 'train', isChecked: false},
];

export {
  SORT_FILTERS,
  FILTERS,
  POINTS_COUNT,
  EVENT_TYPES,
  OFFERS,
};
