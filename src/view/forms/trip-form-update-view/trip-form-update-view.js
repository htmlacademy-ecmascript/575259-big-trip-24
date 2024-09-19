import { createTripFormUpdateTemplate } from './templates.js';
import AbstractView from '../../../framework/view/abstract-view.js';

export default class TripFormUpdateView extends AbstractView {
  #point;
  #offerByType;
  #destination;
  #destinations;

  constructor(point, offerByType, destination, destinations) {
    super();
    this.#point = point;
    this.#offerByType = offerByType;
    this.#destination = destination;
    this.#destinations = destinations;
  }

  get template() {
    return createTripFormUpdateTemplate(this.#point, this.#offerByType, this.#destination, this.#destinations);
  }
}
