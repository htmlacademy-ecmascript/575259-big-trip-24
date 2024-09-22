import {
  createEventTypeSelectorTemplate,
  createEventDestinationTemplate,
  createEventTimeTemplate,
  createEventPriceTemplate,
  createEventDescriptionTemplate,
  createOfferSelectorTemplate,
  createEventPhotosTemplate,
} from '../common-templates.js';

const createTripFormUpdateTemplate = (point, offerByType, destination, destinations) => {
  const offersTemplate = offerByType.offers
    .map((offer) => {
      const isChecked = point.offers.includes(offer.id);

      return createOfferSelectorTemplate({
        id: offer.id,
        title: offer.title,
        price: offer.price,
        name: offer.name,
        isChecked
      });
    })
    .join('');

  const eventTypeSelectorTemplate = createEventTypeSelectorTemplate(point.id,point.type);
  const eventDestinationTemplate = createEventDestinationTemplate(destination.name, point.type, destinations);
  const eventTimeTemplate = createEventTimeTemplate(point.dateFrom, point.dateTo);
  const eventPriceTemplate = createEventPriceTemplate(point.basePrice);
  const eventDescriptionTemplate = createEventDescriptionTemplate(point.description);

  return `
<form class="event event--edit" action="#" method="post">
  <header class="event__header">
    ${eventTypeSelectorTemplate}
    ${eventDestinationTemplate}
    ${eventTimeTemplate}
    ${eventPriceTemplate}

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
        ${offersTemplate}
      </div>
    </section>

    <section class="event__section  event__section--destination">
      ${eventDescriptionTemplate}

      ${destination.pictures && createEventPhotosTemplate(destination.pictures)}
    </section>
  </section>
</form>
`;
};

export { createTripFormUpdateTemplate };
