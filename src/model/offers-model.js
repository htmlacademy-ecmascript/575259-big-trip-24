export default class OffersModel {
  #offers = [];
  #service = null;

  constructor(service) {
    this.#service = service;
    this.#offers = this.#service.getOffers();
  }

  getOffers() {
    return this.#offers;
  }

  getOfferByType(type) {
    return this.#service.getOfferByType(type);
  }
}
