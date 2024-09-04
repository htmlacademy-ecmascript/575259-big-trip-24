import {
  createEventTypeSelectorTemplate,
  createEventDestinationTemplate,
  createEventTimeTemplate,
  createEventPriceTemplate,
  createEventDescriptionTemplate,
  createOfferSelectorTemplate,
} from '../common-templates.js';
import { OFFERS } from '../../../contstants.js';


const createTripFormCreateTemplate = () => `
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      ${createEventTypeSelectorTemplate()}
      ${createEventDestinationTemplate()}
      ${createEventTimeTemplate()}
      ${createEventPriceTemplate()}

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${OFFERS.map(({ title, price, name, isChecked }) => createOfferSelectorTemplate(title, price, name, isChecked)).join('')}
        </div>
      </section>

      <section class="event__section  event__section--destination">
        ${createEventDescriptionTemplate('Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.')}

        <div class="event__photos-container">
          <div class="event__photos-tape">
            <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
          </div>
        </div>
      </section>
    </section>
  </form>
`;

export { createTripFormCreateTemplate };
