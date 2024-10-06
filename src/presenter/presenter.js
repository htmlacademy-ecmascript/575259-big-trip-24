import { render } from '../framework/render.js';
import SortView from '../view/sort-view/sort-view.js';
import FiltersView from '../view/filters-view/filters-view.js';
import TripInfoView from '../view/trip-info-view/trip-info-view.js';
import PointsListView from '../view/points-list-view/points-list-view.js';
import TripFormCreateView from '../view/forms/trip-form-create-view/trip-form-create-view.js';
import EmptyPointsView from '../view/empty-points-view/empty-points-view.js';
import PointPresenter from './point-presenter.js';
import { RenderPosition, remove } from '../framework/render.js';
import { getRandomArrayElement, updateItem, sortingPoints } from '../utils.js';
import { sortByDefault, sortTypes } from '../constants.js';
export default class Presenter {
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;

  #points = [];

  #filtersContainer = null;
  #eventsContainer = null;
  #tripInfoContainer = null;

  #pointPresenters = new Map();

  #currentSortType = sortByDefault;
  #sortComponent = null;

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

    if (this.#pointsModel.points.length === 0) {
      this.#renderEmptyPoints();
      return;
    }

    this.#renderSort(this.#currentSortType);
    this.#renderPoints();
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

  #renderSort(sortingType) {
    if (this.#sortComponent !== null) {
      remove(this.#sortComponent);
    }

    this.#sortComponent = new SortView({ onSortClick: this.#handleSortClick, sortingType });
    render(this.#sortComponent, this.#eventsContainer);
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

  #renderPoint(pointsContainer, point) {
    const pointPresenter = new PointPresenter({
      container: pointsContainer,
      pointsModel: this.#pointsModel,
      offersModel: this.#offersModel,
      destinationsModel: this.#destinationsModel,
      onPointChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #renderPoints() {
    this.#points = this.#pointsModel.points;

    const pointsListComponent = new PointsListView();
    render(pointsListComponent, this.#eventsContainer);

    this.#points.forEach((point) => this.#renderPoint(pointsListComponent.element, point));
  }

  #clearPoints() {
    this.#pointPresenters.forEach((pointPresenter) => pointPresenter.destroy());
    this.#pointPresenters.clear();
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((pointPresenter) => pointPresenter.resetView());
  };

  #handleSortClick = (sortType) => {
    if (sortType === sortByDefault) {
      this.#points = sortingPoints[sortTypes.day](this.#points);
    } else {
      this.#points = sortingPoints[sortType](this.#points);
    }

    this.#currentSortType = sortType;
    this.#renderSort(sortType);
    this.#clearPoints();
    this.#renderPoints();
  };
}
