import { createNewSortTemplate } from './templates.js';
import AbstractView from '../../framework/view/abstract-view.js';
import { sortByDefault } from '../../constants.js';

export default class SortView extends AbstractView {
  #onSortClick = null;
  #sortingType = sortByDefault;

  constructor({ onSortClick, sortingType }) {
    super();
    this.#onSortClick = onSortClick;
    this.#sortingType = sortingType;

    const sortInputs = this.element.querySelectorAll('.trip-sort__input');
    sortInputs.forEach((input) => input.addEventListener('click', this.#sortClickHandler));
  }

  get template() {
    return createNewSortTemplate(this.#sortingType);
  }

  #sortClickHandler = (event) => {
    event.preventDefault();

    const sortType = event.target.dataset.sortType;
    this.#onSortClick(sortType);
  };
}
