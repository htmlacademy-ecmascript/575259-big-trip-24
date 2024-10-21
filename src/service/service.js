import { destinationsMock, offersMock } from '../mock/index.js';
import { POINTS_COUNT, MAX_DATE_DIFF, PriceLimit, EVENT_TYPES } from '../constants.js';
import {
  getRandomArrayElement,
  getRandomInteger,
  getRandomDateBetween,
  getRandomBoolean,
  generateDateToDateFrom,
} from '../utils.js';

export default class Service {
  #destinations = [];
  #offers = [];
  #points = [];

  constructor() {
    this.#destinations = destinationsMock;
    this.#offers = offersMock;
    this.#points = this.#generatePoints(POINTS_COUNT);
  }

  getDestinations() {
    return this.#destinations;
  }

  getDestinationNames() {
    return this.#destinations.map((currentDestination) => currentDestination.name);
  }

  getDestinationById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }

  getDestinationByName(name) {
    return this.#destinations.find((destination) => destination.name === name);
  }

  getOffers() {
    return this.#offers;
  }

  getOfferByType(type) {
    return this.#offers.find((offer) => offer.type === type);
  }

  getPoints() {
    return this.#points;
  }

  getPointById(id) {
    return this.#points.find((point) => point.id === id);
  }

  #generatePoints(count) {
    return Array.from({ length: count }, () => {
      const randomDateTo = getRandomDateBetween(new Date(), new Date(Date.now() + MAX_DATE_DIFF));
      const randomDateFrom = getRandomDateBetween(randomDateTo, new Date(Date.now() + MAX_DATE_DIFF));

      const { dateFrom, dateTo} = generateDateToDateFrom(randomDateFrom, randomDateTo);

      const type = getRandomArrayElement(EVENT_TYPES);
      const offersByType = this.getOfferByType(type).offers;
      const randomOffers = offersByType.slice(0, getRandomInteger(0, offersByType.length - 1));

      return {
        id: crypto.randomUUID(),
        basePrice: getRandomInteger(PriceLimit.MIN, PriceLimit.MAX),
        dateFrom,
        dateTo,
        destination: getRandomArrayElement(this.#destinations).id,
        isFavorite: getRandomBoolean(),
        offers: randomOffers,
        type,
      };
    });
  }
}
