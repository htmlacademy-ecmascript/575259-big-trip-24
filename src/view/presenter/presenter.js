import {render} from '../../render.js';
import SortView from '../sort-view/sort-view.js';
import FiltersView from '../filters-view/filters-view.js';
import PointView from '../point-view/point-view.js';
import TripInfoView from '../trip-info-view/trip-info.js';
import TripFormCreateView from '../forms/trip-form-create-view/trip-form-create-view.js';
import TripFormUpdateView from '../forms/trip-form-update-view/trip-form-update-view.js';
import { RenderPosition } from '../../render.js';
import { getRandomArrayElement } from '../../utils.js';

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

  renderTripInfo() {
    const tripInfoComponent = new TripInfoView();
    render(tripInfoComponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  renderFilters() {
    const filtersComponent = new FiltersView();
    render(filtersComponent, this.#filtersContainer);
  }

  renderSort() {
    const sortComponent = new SortView();
    render(sortComponent, this.#eventsContainer);
  }

  renderTripFormCreate() {
    const randomPointId = getRandomArrayElement(this.#pointsModel.getPoints()).id;
    const point = this.#pointsModel.getPointById(randomPointId);
    const offerByType = this.#offersModel.getOfferByType(point.type);
    const destination = this.#destinationsModel.getDestinationById(point.destination);

    const tripFormCreateComponent = new TripFormCreateView(point, offerByType, destination);
    render(tripFormCreateComponent, this.#eventsContainer);
  }

  renderTripFormUpdate(container) {
    const randomPointId = getRandomArrayElement(this.#pointsModel.getPoints()).id;

    const point = this.#pointsModel.getPointById(randomPointId);
    const offerByType = this.#offersModel.getOfferByType(point.type);
    const destination = this.#destinationsModel.getDestinationById(point.destination);

    const tripFormUpdateComponent = new TripFormUpdateView(point, offerByType, destination);
    render(tripFormUpdateComponent, container);
  }

  renderPoint(pointsContainer, point) {
    const destination = this.#destinationsModel.getDestinationById(point.destination);
    const offerByType = this.#offersModel.getOfferByType(point.type);

    const pointComponent = new PointView(point, destination, offerByType);
    render(pointComponent, pointsContainer);
  }

  renderPoints() {
    const points = [...this.#pointsModel.getPoints()];

    const pointsContainer = document.createElement('ul');
    pointsContainer.classList.add('trip-events__list');
    this.#eventsContainer.append(pointsContainer);

    this.renderTripFormUpdate(pointsContainer);

    for (const point of points) {
      this.renderPoint(pointsContainer, point);
    }
  }

  init() {
    this.renderTripInfo();
    this.renderFilters();
    this.renderSort();
    this.renderTripFormCreate();
    this.renderPoints();
  }
}
