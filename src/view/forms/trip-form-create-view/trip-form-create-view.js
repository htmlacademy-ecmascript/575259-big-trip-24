import { createTripFormCreateTemplate } from './templates.js';
import AbstractView from '../../../framework/view/abstract-view.js';

export default class TripFormCreateView extends AbstractView {
  #point = null;
  #destination = null;
  #offerByType = null;
  #destinations = [];

  constructor(point, offerByType, destination, destinations) {
    super();
    this.#point = point;
    this.#offerByType = offerByType;
    this.#destination = destination;
    this.#destinations = destinations;
  }

  get template() {
    return createTripFormCreateTemplate(this.#point, this.#offerByType, this.#destination, this.#destinations);
  }
}
