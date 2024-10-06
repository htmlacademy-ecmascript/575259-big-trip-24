import { createPointViewTemplate } from './templates.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class PointView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;
  #onEditClick = null;
  #onFavouriteClick = null;

  constructor({ point, destination, offers, onEditClick, onFavouriteClick }) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
    this.#onEditClick = onEditClick;
    this.#onFavouriteClick = onFavouriteClick;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favouriteClickHandler);
  }

  get template() {
    return createPointViewTemplate(this.#point, this.#destination, this.#offers);
  }

  #editClickHandler = (event) => {
    event.preventDefault();
    this.#onEditClick();
  };

  #favouriteClickHandler = (event) => {
    event.preventDefault();
    this.#onFavouriteClick();
  };
}
