import { FILTERS } from '../../contstants.js';

const createFilterItemTemplate = (filterName, isChecked = false) => `
<div class="trip-filters__filter">
  <input id="filter-${filterName}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterName}" ${isChecked ? 'checked' : ''}>
  <label class="trip-filters__filter-label" for="filter-${filterName}">${filterName}</label>
</div>
`;


const createNewFiltersTemplate = () => `
  <form class="trip-filters" action="#" method="get">
    ${FILTERS.map(({ name, isChecked }) => createFilterItemTemplate(name, isChecked)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;

export { createNewFiltersTemplate };
