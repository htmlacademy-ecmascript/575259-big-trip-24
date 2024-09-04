import { SORT_FILTERS } from '../../contstants.js';

const createSortItemTemplate = (filterName, isChecked = false) => `
  <div class="trip-sort__item  trip-sort__item--day">
    <input id="sort-${filterName}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${filterName}" ${isChecked ? 'checked' : ''}>
    <label class="trip-sort__btn" for="sort-${filterName}">${filterName}</label>
  </div>
`;


const createNewSortTemplate = () => `
  <form class="trip-filters" action="#" method="get">
      ${SORT_FILTERS.map(({ name, isChecked }) => createSortItemTemplate(name, isChecked)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;

export { createNewSortTemplate };
