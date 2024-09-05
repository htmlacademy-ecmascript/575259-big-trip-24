import {
  createEventTypeSelectorTemplate,
  createEventDestinationTemplate,
  createEventTimeTemplate,
  createEventPriceTemplate,
  createEventDescriptionTemplate,
  createOfferSelectorTemplate,
} from '../common-templates.js';
import { OFFERS } from '../../../contstants.js';


const createTripFormCreateTemplate = () => {
  const eventTypeSelectorTemplate = createEventTypeSelectorTemplate();
  const eventDestinationTemplate = createEventDestinationTemplate();
  const eventTimeTemplate = createEventTimeTemplate();
  const eventPriceTemplate = createEventPriceTemplate();
  const offersTemplate = OFFERS.map(({ title, price, name, isChecked }) => createOfferSelectorTemplate(title, price, name, isChecked)).join('');
  const eventDescriptionTemplate = createEventDescriptionTemplate();

  return `
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      ${eventTypeSelectorTemplate}
      ${eventDestinationTemplate}
      ${eventTimeTemplate}
      ${eventPriceTemplate}

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${offersTemplate}
        </div>
      </section>

      <section class="event__section  event__section--destination">
        ${eventDescriptionTemplate}

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
};

export { createTripFormCreateTemplate };
