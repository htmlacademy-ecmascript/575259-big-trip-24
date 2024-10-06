import { SORT_FILTERS, sortByDefault } from '../../constants.js';

const createSortItemTemplate = (filterName, disabled = false, sortingType = sortByDefault) => {
  const isChecked = filterName === sortingType;

  return `
  <div class="trip-sort__item  trip-sort__item--${filterName}">
    <input id="sort-${filterName}" data-sort-type="${filterName}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${filterName}" ${isChecked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
    <label class="trip-sort__btn" for="sort-${filterName}">${filterName}</label>
  </div>
`;
};

const createNewSortTemplate = (sortingType) => {
  const sortItemsTemplate = SORT_FILTERS.map(({ name, disabled }) => createSortItemTemplate(name, disabled, sortingType)).join('');

  return `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortItemsTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;
};

export { createNewSortTemplate };
