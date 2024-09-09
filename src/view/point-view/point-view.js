import { createElement } from '../../render.js';
import { createPointViewTemplate } from './templates.js';


export default class PointView {
  #point = null;
  #destination = null;
  #offerByType = null;

  constructor(point, destination, offerByType) {
    this.#point = point;
    this.#destination = destination;
    this.#offerByType = offerByType;
  }

  getTemplate() {
    return createPointViewTemplate(this.#point, this.#destination, this.#offerByType);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
