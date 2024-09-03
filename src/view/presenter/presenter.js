import {render} from '../../render.js';
import SortView from '../sort-view/sort-view.js';
import FiltersView from '../filters-view/filters-view.js';
import PointView from '../point-view/point-view.js';
import TripInfoView from '../trip-info-view/trip-info.js';
import TripFormCreateView from '../forms/trip-form-create-view/trip-form-create-view.js';
import TripFormUpdateView from '../forms/trip-form-update-view/trip-form-update-view.js';
import { POINTS_COUNT } from '../../contstants.js';
import { RenderPosition } from '../../render.js';

export default class Presenter {
  constructor(filtersContainer, eventsContainer, tripInfoContainer) {
    this.filtersContainer = filtersContainer;
    this.eventsContainer = eventsContainer;
    this.tripInfoContainer = tripInfoContainer;
  }

  renderTripInfo() {
    const tripInfoComponent = new TripInfoView();
    render(tripInfoComponent, this.tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  renderFilters() {
    const filtersComponent = new FiltersView();
    render(filtersComponent, this.filtersContainer);
  }

  renderSort() {
    const sortComponent = new SortView();
    render(sortComponent, this.eventsContainer);
  }

  renderTripFormCreate() {
    const tripFormCreateComponent = new TripFormCreateView();
    render(tripFormCreateComponent, this.eventsContainer);
  }

  renderTripFormUpdate(container) {
    const tripFormUpdateComponent = new TripFormUpdateView();
    render(tripFormUpdateComponent, container);
  }

  renderPoint(pointsContainer) {
    const pointComponent = new PointView();
    render(pointComponent, pointsContainer);
  }

  renderPoints() {
    const pointsContainer = document.createElement('ul');
    pointsContainer.classList.add('trip-events__list');
    this.eventsContainer.append(pointsContainer);

    this.renderTripFormUpdate(pointsContainer);

    for (let i = 0; i < POINTS_COUNT; i += 1) {
      this.renderPoint(pointsContainer);
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
