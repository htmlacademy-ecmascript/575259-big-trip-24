import {
  createEventTypeSelectorTemplate,
  createEventDestinationTemplate,
  createEventTimeTemplate,
  createEventPriceTemplate,
  createEventDescriptionTemplate,
  createOfferSelectorTemplate,
} from '../common-templates.js';
import { OFFERS } from '../../../contstants.js';

const createTripFormUpdateTemplate = () => `
<form class="event event--edit" action="#" method="post">
  <header class="event__header">
    ${createEventTypeSelectorTemplate('flight')}
    ${createEventDestinationTemplate('Chamonix')}
    ${createEventTimeTemplate('18/03/19 12:25', '18/03/19 13:35')}
    ${createEventPriceTemplate('160')}

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>
  <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${OFFERS.map(({ title, price, name, isChecked }) => createOfferSelectorTemplate(title, price, name, isChecked)).join('')}
      </div>
    </section>

    <section class="event__section  event__section--destination">
      ${createEventDescriptionTemplate('Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its skiing.')}
    </section>
  </section>
</form>
`;

export { createTripFormUpdateTemplate };
