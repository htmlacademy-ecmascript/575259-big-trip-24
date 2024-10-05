import { getFilterStatus } from './utils.js';

const SORT_FILTERS = [
  {name: 'day', isChecked: true},
  {name: 'event', isChecked: false},
  {name: 'time', isChecked: false},
  {name: 'price', isChecked: false},
  {name: 'offers', isChecked: false},
];

const filterType = {
  everything: 'everything',
  future: 'future',
  present: 'present',
  past: 'past',
};

const FILTER = {
  [filterType.everything]: (points) => points.length > 0,
  [filterType.future]: (points) => getFilterStatus(points).isPointsFuture,
  [filterType.present]: (points) => getFilterStatus(points).isPointsPresent,
  [filterType.past]: (points) => getFilterStatus(points).isPointsPast,
};

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

const POINTS_COUNT = 10;

const MAX_DATE_DIFF = 86400000;

const PriceLimit = {
  MIN: 1000,
  MAX: 100000,
};

const DateFormat = {
  DATE: 'MMM M',
  TIME: 'HH:mm',
  DATE_TIME: 'DD/MM/YY HH:mm',
};

const KeyCode = {
  ESCAPE: 'Escape',
};

const EmptyPointsText = {
  [filterType.everything]: 'Click New Event to create your first point',
  [filterType.past]: 'There are no past events now',
  [filterType.present]: 'There are no present events now',
  [filterType.future]: 'There are no future events now',
};

const DEFAULT_FILTER_TYPE = filterType.everything;

const ViewMode = {
  VIEW: 'view',
  EDIT: 'edit',
};

export {
  SORT_FILTERS,
  FILTER,
  EVENT_TYPES,
  POINTS_COUNT,
  MAX_DATE_DIFF,
  PriceLimit,
  DateFormat,
  KeyCode,
  EmptyPointsText,
  DEFAULT_FILTER_TYPE,
  ViewMode,
};
