export default class PointsModel {
  #points = [];

  constructor(service) {
    this.service = service;
    this.#points = this.service.getPoints();
  }

  getPoints() {
    return this.#points;
  }

  getPointById(id) {
    return this.service.getPointById(id);
  }
}
