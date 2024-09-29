import { createEmptyPointsTemplate } from './template.js';
import AbstractView from '../../framework/view/abstract-view.js';


export default class EmptyPointsView extends AbstractView {
  #filterType = null;

  constructor(filterType) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createEmptyPointsTemplate(this.#filterType);
  }
}
