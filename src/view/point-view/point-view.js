import { createPointViewTemplate } from './templates.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class PointView extends AbstractView {
  #point = null;
  #destination = null;
  #offerByType = null;

  constructor(point, destination, offerByType) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offerByType = offerByType;
  }

  get template() {
    return createPointViewTemplate(this.#point, this.#destination, this.#offerByType);
  }
}
