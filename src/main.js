import Presenter from './view/presenter/presenter.js';
import Service from './service/service.js';
import PointsModel from './model/points-model.js';
import OffersModel from './model/offers-model.js';
import DestinationsModel from './model/destinations-model.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const tripInfoContainer = document.querySelector('.trip-main');

const service = new Service();
const pointsModel = new PointsModel(service);
const offersModel = new OffersModel(service);
const destinationsModel = new DestinationsModel(service);

const presenter = new Presenter({
  filtersContainer,
  eventsContainer,
  tripInfoContainer,
  pointsModel,
  offersModel,
  destinationsModel,
});
presenter.init();
