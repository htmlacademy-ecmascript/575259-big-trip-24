import { createElement } from '../../../render.js';
import { createTripFormUpdateTemplate } from './templates.js';


export default class TripFormUpdateView {
  #point;
  #offerByType;
  #destination;

  constructor(point, offerByType, destination) {
    this.#point = point;
    this.#offerByType = offerByType;
    this.#destination = destination;
  }

  getTemplate() {
    return createTripFormUpdateTemplate(this.#point, this.#offerByType, this.#destination);
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
