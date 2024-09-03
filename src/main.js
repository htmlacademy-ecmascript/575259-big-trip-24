import Presenter from './view/presenter/presenter.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const tripInfoContainer = document.querySelector('.trip-main');

const presenter = new Presenter(filtersContainer, eventsContainer, tripInfoContainer);
presenter.init();
