import { createElement } from '../../render.js';
import { createPointViewTemplate } from './templates.js';


export default class PointView {
  getTemplate() {
    return createPointViewTemplate();
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
