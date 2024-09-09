export default class DestinationsModel {
  #destinations = [];

  constructor(service) {
    this.service = service;
    this.#destinations = this.service.getDestinations();
  }

  getDestinations() {
    return this.#destinations;
  }

  getDestinationById(id) {
    return this.service.getDestinationById(id);
  }
}
