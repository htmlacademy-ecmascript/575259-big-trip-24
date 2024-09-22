import { createPointsListViewTemplate } from './templates.js';
import AbstractView from '../../framework/view/abstract-view.js';

export default class PointsListView extends AbstractView {
  get template() {
    return createPointsListViewTemplate();
  }
}
