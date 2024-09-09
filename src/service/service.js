import { destinationsMock, offersMock } from '../mock/index.js';
import { POINTS_COUNT, MAX_DATE_DIFF, MIN_PRICE, MAX_PRICE, EVENT_TYPES } from '../contstants.js';
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
    this.#points = this.generatePoints(POINTS_COUNT);
  }

  getDestinations() {
    return this.#destinations;
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

  generatePoints(count) {
    return Array.from({ length: count }, () => {
      const randomDate1 = getRandomDateBetween(new Date(), new Date(Date.now() + MAX_DATE_DIFF));
      const randomDate2 = getRandomDateBetween(randomDate1, new Date(Date.now() + MAX_DATE_DIFF));

      const { dateFrom, dateTo} = generateDateToDateFrom(randomDate1, randomDate2);

      return {
        id: crypto.randomUUID(),
        basePrice: getRandomInteger(MIN_PRICE, MAX_PRICE),
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
