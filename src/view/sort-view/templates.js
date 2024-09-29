import { SORT_FILTERS } from '../../constants.js';

const createSortItemTemplate = (filterName, isChecked = false) => `
  <div class="trip-sort__item  trip-sort__item--${filterName}">
    <input id="sort-${filterName}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${filterName}" ${isChecked ? 'checked' : ''}>
    <label class="trip-sort__btn" for="sort-${filterName}">${filterName}</label>
  </div>
`;


const createNewSortTemplate = () => {
  const sortItemsTemplate = SORT_FILTERS.map(({ name, isChecked }) => createSortItemTemplate(name, isChecked)).join('');

  return `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortItemsTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;
};

export { createNewSortTemplate };
