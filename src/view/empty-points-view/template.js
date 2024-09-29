import { EmptyPointsText, DEFAULT_FILTER_TYPE } from '../../constants.js';

const createEmptyPointsTemplate = (filterType = DEFAULT_FILTER_TYPE) => `<p class="trip-events__msg">${EmptyPointsText[filterType]}</p>`;

export {
  createEmptyPointsTemplate,
};
