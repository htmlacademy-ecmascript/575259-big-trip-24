import { createTripFormTemplate } from './templates.js';
import AbstractStatefulView from '../../framework/view/abstract-stateful-view.js';

export default class TripFormView extends AbstractStatefulView {
  #offers = [];
  #destination = null;
  #destinations = [];
  #onFormSubmit = null;
  #onCancelClick = null;
  #isCreateMode = false;

  #initialState = null;
  #getDestinationByName = null;
  #getOfferByType = null;

  constructor({
    point,
    offers,
    destination,
    destinations,
    onFormSubmit,
    onCancelClick,
    isCreateMode,
    getDestinationByName,
    getOfferByType
  }) {
    super();

    this.#destination = destination;
    this.#initialState = TripFormView.parsePointToState(point, this.#destination);
    this._setState(this.#initialState);

    this.#offers = offers;
    this.#destinations = destinations;
    this.#onFormSubmit = onFormSubmit;
    this.#onCancelClick = onCancelClick;

    this.#isCreateMode = isCreateMode;
    this.#getDestinationByName = getDestinationByName;
    this.#getOfferByType = getOfferByType;

    this._restoreHandlers();
  }

  get template() {
    return createTripFormTemplate({
      point: this._state,
      offers: this.#offers,
      destination: this.#destination,
      destinations: this.#destinations,
      isCreateMode: this.#isCreateMode
    });
  }

  _restoreHandlers() {
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#cancelClickHandler);
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#formSubmitHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#cancelClickHandler);
    this.element.querySelectorAll('.event__type-input').forEach((input) => {
      input.addEventListener('change', this.#eventTypeChangeHandler);
    });
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#eventDestinationChangeHandler);
  }

  #formSubmitHandler = (event) => {
    event.preventDefault();
    this.#onFormSubmit();
  };

  #cancelClickHandler = (event) => {
    event.preventDefault();
    // this._setState(TripFormView.parsePointToState(this.#initialState));
    this.#onCancelClick();
  };

  #eventTypeChangeHandler = (event) => {
    event.preventDefault();

    const updatedType = event.target.value;
    const updatedOffers = this.#getOfferByType(updatedType).offers;

    this.updateElement({ type: updatedType, offers: updatedOffers });
  };

  #eventDestinationChangeHandler = (event) => {
    event.preventDefault();

    const updatedDestinationName = event.target.value;
    const updatedDestination = this.#getDestinationByName(updatedDestinationName);

    this.updateElement({ destination: updatedDestination });
  };

  static parsePointToState(point, destination) {
    const state = { ...point, destination };

    return state;
  }

  static parseStateToPoint(state) {
    const point = { ...state };

    return point;
  }
}
