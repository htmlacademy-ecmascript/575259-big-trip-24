import { createElement } from '../../../render.js';
import { createTripFormUpdateTemplate } from './templates.js';


export default class TripFormUpdateView {
  #point;
  #offerByType;
  #destination;
  #destinations;

  constructor(point, offerByType, destination, destinations) {
    this.#point = point;
    this.#offerByType = offerByType;
    this.#destination = destination;
    this.#destinations = destinations;
  }

  getTemplate() {
    return createTripFormUpdateTemplate(this.#point, this.#offerByType, this.#destination, this.#destinations);
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
