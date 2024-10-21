import PointView from '../view/point-view/point-view.js';
import TripFormView from '../view/trip-form-view/trip-form-view.js';
import { render, replace, remove } from '../framework/render.js';
import { KeyCode, ViewMode } from '../constants.js';

export default class PointPresenter {
  #container;

  #pointsModel;
  #offersModel;
  #destinationsModel;

  #pointComponentView = null;
  #pointComponentUpdate = null;

  #onPointChange = null;
  #onModeChange = null;

  #mode = ViewMode.VIEW;

  #point = null;

  constructor({ container, pointsModel, offersModel, destinationsModel, onPointChange, onModeChange }) {
    this.#container = container;

    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#onPointChange = onPointChange;
    this.#onModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;
    const destination = this.#destinationsModel.getDestinationById(point.destination);
    const offers = point.offers;

    const prevPointComponentView = this.#pointComponentView;
    const prevPointComponentUpdate = this.#pointComponentUpdate;

    this.#pointComponentView = new PointView({
      point,
      destination,
      offers,
      onEditClick: this.#editClickHandler,
      onFavouriteClick: this.#handleFavouriteClick,
    });

    this.#pointComponentUpdate = this.#getTripForm({
      pointId: point.id,
      onFormSubmit: this.#formSubmitHandler,
      onCancelClick: this.#cancelClickHandler,
      getDestinationByName: this.#getDestinationByName,
      getOfferByType: this.#getOfferByType,
    });

    if (prevPointComponentView === null || prevPointComponentUpdate === null) {
      render(this.#pointComponentView, this.#container);
      return;
    }

    if (this.#mode === ViewMode.VIEW) {
      replace(this.#pointComponentView, prevPointComponentView);
    }

    if (this.#mode === ViewMode.EDIT) {
      replace(this.#pointComponentUpdate, prevPointComponentUpdate);
    }

    remove(prevPointComponentView);
    remove(prevPointComponentUpdate);
  }

  destroy() {
    remove(this.#pointComponentView);
    remove(this.#pointComponentUpdate);
  }

  resetView() {
    if (this.#mode !== ViewMode.VIEW) {
      this.#replaceFormToView();
    }
  }

  #getDestinationByName = (name) => this.#destinationsModel.getDestinationByName(name);

  #getOfferByType = (type) => this.#offersModel.getOfferByType(type);

  #getTripForm({ pointId, onFormSubmit, onCancelClick, getDestinationByName, getOfferByType }) {
    const point = this.#pointsModel.getPointById(pointId);
    const offerByType = this.#offersModel.getOfferByType(point.type);
    const destination = this.#destinationsModel.getDestinationById(point.destination);
    const destinations = this.#destinationsModel.destinationNames;

    return new TripFormView({
      point,
      offers: offerByType.offers,
      destination,
      destinations,
      onFormSubmit,
      onCancelClick,
      getDestinationByName,
      getOfferByType,
    });
  }

  #handleModeChange() {
    this.#onModeChange();
  }

  #replaceViewToForm() {
    this.#handleModeChange();
    replace(this.#pointComponentUpdate, this.#pointComponentView);
    this.#mode = ViewMode.EDIT;
  }

  #replaceFormToView() {
    replace(this.#pointComponentView, this.#pointComponentUpdate);
    this.#mode = ViewMode.VIEW;
  }

  #escKeyDownHandler = (event) => {
    if (event.key === KeyCode.ESCAPE) {
      event.preventDefault();
      this.#replaceFormToView();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #editClickHandler = () => {
    this.#replaceViewToForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #formSubmitHandler = () => {
  // TODO: add submit handler
    this.#replaceFormToView();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #cancelClickHandler = () => {
    this.#replaceFormToView();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleFavouriteClick = () => {
    this.#onPointChange({
      ...this.#point,
      isFavorite: !this.#point.isFavorite,
    });
  };
}
