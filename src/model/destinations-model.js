export default class DestinationsModel {
  #destinations = [];
  #destinationNames = [];

  constructor(service) {
    this.service = service;
    this.#destinations = this.service.getDestinations();
    this.#destinationNames = this.service.getDestinationNames();
  }

  getDestinations() {
    return this.#destinations;
  }

  getDestinationNames() {
    return this.#destinationNames;
  }

  getDestinationById(id) {
    return this.service.getDestinationById(id);
  }
}
