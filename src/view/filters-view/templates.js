import { FILTER, DEFAULT_FILTER_TYPE } from '../../constants.js';

const createFilterItemTemplate = (filterName, isVisible) => {
  const isActive = filterName === DEFAULT_FILTER_TYPE;

  return `
    <div class="trip-filters__filter">
      <input id="filter-${filterName}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterName}" ${isVisible ? '' : 'disabled'} ${isActive ? 'checked' : ''}>
      <label class="trip-filters__filter-label" for="filter-${filterName}">${filterName}</label>
    </div>
  `;
};


const createNewFiltersTemplate = (points) => {
  const filterItemsTemplate = Object.entries(FILTER).map(([name, isVisible]) => createFilterItemTemplate(name, isVisible(points))).join('');

  return `
  <form class="trip-filters" action="#" method="get">
    ${filterItemsTemplate}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
`;
};

export { createNewFiltersTemplate };
