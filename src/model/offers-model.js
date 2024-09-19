export default class OffersModel {
  #offers = [];
  #service = null;

  constructor(service) {
    this.#service = service;
    this.#offers = this.#service.getOffers();
  }

  get offers() {
    return this.#offers;
  }

  getOfferByType(type) {
    return this.#service.getOfferByType(type);
  }
}
