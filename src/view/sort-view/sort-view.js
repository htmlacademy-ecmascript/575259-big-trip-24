import { createElement } from '../../render.js';
import { createNewSortTemplate } from './templates.js';


export default class SortView {
  getTemplate() {
    return createNewSortTemplate();
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
