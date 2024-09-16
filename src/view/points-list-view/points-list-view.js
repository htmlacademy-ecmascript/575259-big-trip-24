import { createElement } from '../../render.js';
import { createPointsListViewTemplate } from './templates.js';


export default class PointsListView {
  getTemplate() {
    return createPointsListViewTemplate();
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
