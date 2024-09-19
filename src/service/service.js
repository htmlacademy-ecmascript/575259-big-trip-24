import { destinationsMock, offersMock } from '../mock/index.js';
import { POINTS_COUNT, MAX_DATE_DIFF, PriceLimit, EVENT_TYPES } from '../contstants.js';
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

      return {
        id: crypto.randomUUID(),
        basePrice: getRandomInteger(PriceLimit.MIN, PriceLimit.MAX),
        dateFrom,
        dateTo,
        destination: getRandomArrayElement(this.#destinations).id,
        isFavorite: getRandomBoolean(),
        offers: getRandomArrayElement(this.#offers).offers,
        type: getRandomArrayElement(EVENT_TYPES),
      };
    });
  }
}
