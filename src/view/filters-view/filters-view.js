import { createElement } from '../../render.js';
import { createNewFiltersTemplate } from './templates.js';


export default class FiltersView {
  getTemplate() {
    return createNewFiltersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
