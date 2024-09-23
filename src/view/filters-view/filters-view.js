import { createNewFiltersTemplate } from './templates.js';
import AbstractView from '../../framework/view/abstract-view.js';


export default class FiltersView extends AbstractView {
  #points = null;

  constructor(points) {
    super();
    this.#points = points;
  }

  get template() {
    return createNewFiltersTemplate(this.#points);
  }
}
