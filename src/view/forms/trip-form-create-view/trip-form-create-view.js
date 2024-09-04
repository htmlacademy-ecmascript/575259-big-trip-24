import { createElement } from '../../../render.js';
import { createTripFormCreateTemplate } from './templates.js';


export default class TripFormCreateView {
  getTemplate() {
    return createTripFormCreateTemplate();
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
