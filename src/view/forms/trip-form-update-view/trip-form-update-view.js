import { createElement } from '../../../render.js';
import { createTripFormUpdateTemplate } from './templates.js';


export default class TripFormUpdateView {
  getTemplate() {
    return createTripFormUpdateTemplate();
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
