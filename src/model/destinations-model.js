export default class DestinationsModel {
  #destinations = [];
  #destinationNames = [];
  #service = null;

  constructor(service) {
    this.#service = service;
    this.#destinations = this.#service.getDestinations();
    this.#destinationNames = this.#service.getDestinationNames();
  }

  get destinations() {
    return this.#destinations;
  }

  get destinationNames() {
    return this.#destinationNames;
  }

  getDestinationById(id) {
    return this.#service.getDestinationById(id);
  }
}
