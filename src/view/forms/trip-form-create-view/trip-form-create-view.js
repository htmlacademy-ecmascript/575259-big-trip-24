import { createElement } from '../../../render.js';
import { createTripFormCreateTemplate } from './templates.js';


export default class TripFormCreateView {
  #point;
  #destination;
  #offerByType;

  constructor(point, offerByType, destination) {
    this.#point = point;
    this.#offerByType = offerByType;
    this.#destination = destination;
  }

  getTemplate() {
    return createTripFormCreateTemplate(this.#point, this.#offerByType, this.#destination);
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
