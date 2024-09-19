export default class PointsModel {
  #points = [];
  #service = null;

  constructor(service) {
    this.#service = service;
    this.#points = this.#service.getPoints();
  }

  get points() {
    return this.#points;
  }

  getPointById(id) {
    return this.#service.getPointById(id);
  }
}
