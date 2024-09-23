import { render, replace } from '../framework/render.js';
import SortView from '../view/sort-view/sort-view.js';
import FiltersView from '../view/filters-view/filters-view.js';
import PointView from '../view/point-view/point-view.js';
import TripInfoView from '../view/trip-info-view/trip-info-view.js';
import PointsListView from '../view/points-list-view/points-list-view.js';
import TripFormCreateView from '../view/forms/trip-form-create-view/trip-form-create-view.js';
import TripFormUpdateView from '../view/forms/trip-form-update-view/trip-form-update-view.js';
import EmptyPointsView from '../view/empty-points-view/empty-points-view.js';
import { RenderPosition } from '../framework/render.js';
import { getRandomArrayElement } from '../utils.js';
import { KeyCode } from '../constants.js';
export default class Presenter {
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #filtersContainer = null;
  #eventsContainer = null;
  #tripInfoContainer = null;

  constructor({
    filtersContainer,
    eventsContainer,
    tripInfoContainer,
    pointsModel,
    offersModel,
    destinationsModel,
  }) {
    this.#filtersContainer = filtersContainer;
    this.#eventsContainer = eventsContainer;
    this.#tripInfoContainer = tripInfoContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }


  init() {
    this.#renderTripInfo();
    this.#renderFilters();
    this.#renderSort();

    if (this.#pointsModel.points.length === 0) {
      this.#renderEmptyPoints();
    } else {
      this.#renderPoints();
    }
  }

  #renderEmptyPoints() {
    const emptyPointsComponent = new EmptyPointsView();
    render(emptyPointsComponent, this.#eventsContainer);
  }

  #renderTripInfo() {
    const tripInfoComponent = new TripInfoView();
    render(tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  #renderFilters() {
    const filtersComponent = new FiltersView(this.#pointsModel.points);
    render(filtersComponent, this.#filtersContainer);
  }

  #renderSort() {
    const sortComponent = new SortView();
    render(sortComponent, this.#eventsContainer);
  }

  #renderTripFormCreate() {
    const randomPointId = getRandomArrayElement(this.#pointsModel.points).id;
    const point = this.#pointsModel.getPointById(randomPointId);
    const offerByType = this.#offersModel.getOfferByType(point.type);
    const destination = this.#destinationsModel.getDestinationById(point.destination);
    const destinations = this.#destinationsModel.destinationNames;

    const tripFormCreateComponent = new TripFormCreateView(point, offerByType, destination, destinations);
    render(tripFormCreateComponent, this.#eventsContainer);
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

  #renderPoint(pointsContainer, point) {
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

    const destination = this.#destinationsModel.getDestinationById(point.destination);
    const offers = point.offers;

    const pointComponentView = new PointView({
      point,
      destination,
      offers,
      onEditClick: editClickHandler,
    });

    const pointComponentUpdate = this.#getTripFormUpdate({
      pointId: point.id,
      onFormSubmit: formSubmitHandler,
      onCancelClick: cancelClickHandler,
    });

    function replaceViewToForm() {
      replace(pointComponentUpdate, pointComponentView);
    }

    function replaceFormToView() {
      replace(pointComponentView, pointComponentUpdate);
    }

    render(pointComponentView, pointsContainer);
  }


  #renderPoints() {
    const points = [...this.#pointsModel.points];

    const pointsListComponent = new PointsListView();
    render(pointsListComponent, this.#eventsContainer);

    for (const point of points) {
      this.#renderPoint(pointsListComponent.element, point);
    }
  }

}
