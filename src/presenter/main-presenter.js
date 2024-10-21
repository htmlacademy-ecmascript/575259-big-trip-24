import { render } from '../framework/render.js';
import SortView from '../view/sort-view/sort-view.js';
import FiltersView from '../view/filters-view/filters-view.js';
import TripInfoView from '../view/trip-info-view/trip-info-view.js';
import PointsListView from '../view/points-list-view/points-list-view.js';
import EmptyPointsView from '../view/empty-points-view/empty-points-view.js';
import PointPresenter from './point-presenter.js';
import { RenderPosition, remove } from '../framework/render.js';
import { updateItem, sortingPoints } from '../utils.js';
import { sortByDefault } from '../constants.js';

export default class MainPresenter {
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
    this.#points = [...this.#pointsModel.points];

    const sortedPoints = sortingPoints[this.#currentSortType](this.#points);

    const pointsListComponent = new PointsListView();
    render(pointsListComponent, this.#eventsContainer);

    sortedPoints.forEach((point) => this.#renderPoint(pointsListComponent.element, point));
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
    this.#currentSortType = sortType;
    this.#renderSort(sortType);
    this.#clearPoints();
    this.#renderPoints(sortType);
  };
}
