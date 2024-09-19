import { createTripFormUpdateTemplate } from './templates.js';
import AbstractView from '../../../framework/view/abstract-view.js';

export default class TripFormUpdateView extends AbstractView {
  #point = null;
  #offerByType = null;
  #destination = null;
  #destinations = [];
  #onFormSubmit = null;
  #onCancelClick = null;

  constructor({ point, offerByType, destination, destinations, onFormSubmit, onCancelClick }) {
    super();
    this.#point = point;
    this.#offerByType = offerByType;
    this.#destination = destination;
    this.#destinations = destinations;
    this.#onFormSubmit = onFormSubmit;
    this.#onCancelClick = onCancelClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#cancelClickHandler);
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#formSubmitHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#cancelClickHandler);
  }

  get template() {
    return createTripFormUpdateTemplate(this.#point, this.#offerByType, this.#destination, this.#destinations);
  }

  #formSubmitHandler = (event) => {
    event.preventDefault();
    this.#onFormSubmit();
  };

  #cancelClickHandler = (event) => {
    event.preventDefault();
    this.#onCancelClick();
  };
}
