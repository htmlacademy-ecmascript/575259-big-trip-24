import PointView from '../view/point-view/point-view.js';
import TripFormUpdateView from '../view/forms/trip-form-update-view/trip-form-update-view.js';
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

    const escKeyDownHandler = (event) => {
      if (event.key === KeyCode.ESCAPE) {
        event.preventDefault();
        replaceFormToView();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const editClickHandler = () => {
      replaceViewToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    };

    const formSubmitHandler = () => {
    // TODO: add submit handler
      replaceFormToView();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const cancelClickHandler = () => {
      replaceFormToView();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const prevPointComponentView = this.#pointComponentView;
    const prevPointComponentUpdate = this.#pointComponentUpdate;

    this.#pointComponentView = new PointView({
      point,
      destination,
      offers,
      onEditClick: editClickHandler,
      onPointChange: this.#onPointChange,
    });

    this.#pointComponentUpdate = this.#getTripFormUpdate({
      pointId: point.id,
      onFormSubmit: formSubmitHandler,
      onCancelClick: cancelClickHandler,
      onPointChange: this.#handlePointChange,
    });

    if (prevPointComponentView === null || prevPointComponentUpdate === null) {
      render(this.#pointComponentView, this.#container);
    }

    // if (this.#mode === ViewMode.VIEW) {
    //   replace(this.#pointComponentView, this.#pointComponentUpdate);
    // }

    // if (this.#mode === ViewMode.EDIT) {
    //   replace(this.#pointComponentUpdate, this.#pointComponentView);
    // }

    function replaceViewToForm() {
      replace(this.#pointComponentUpdate, this.#pointComponentView);
      this.#mode = ViewMode.EDIT;
    }

    function replaceFormToView() {
      replace(this.#pointComponentView, this.#pointComponentUpdate);
      this.#mode = ViewMode.VIEW;
    }

    remove(prevPointComponentView);
    remove(prevPointComponentUpdate);


  }

  #getTripFormUpdate({ pointId, onFormSubmit, onCancelClick }) {
    const point = this.#pointsModel.getPointById(pointId);
    const offerByType = this.#offersModel.getOfferByType(point.type);
    const destination = this.#destinationsModel.getDestinationById(point.destination);
    const destinations = this.#destinationsModel.destinationNames;

    return new TripFormUpdateView({
      point,
      offerByType,
      destination,
      destinations,
      onFormSubmit,
      onCancelClick,
    });
  }

  #handlePointChange() {
    this.#onPointChange({
      ...this.#point,
      isFavorite: !this.#point.isFavorite,
    });
  }

  #handleModeChange() {
    this.#onModeChange();
  }
}
