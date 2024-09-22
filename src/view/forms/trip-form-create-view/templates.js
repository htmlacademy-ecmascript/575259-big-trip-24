import {
  createEventTypeSelectorTemplate,
  createEventDestinationTemplate,
  createEventTimeTemplate,
  createEventPriceTemplate,
  createEventDescriptionTemplate,
  createEventPhotosTemplate,
  createOffersSectionTemplate,
} from '../common-templates.js';


const createTripFormCreateTemplate = (point, offerByType, destination, destinations) => {
  const { offers } = offerByType;

  const eventTypeSelectorTemplate = createEventTypeSelectorTemplate(point.id, point.type);
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
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
      ${offers.length > 0 ? createOffersSectionTemplate(offers) : ''}

      <section class="event__section  event__section--destination">
        ${eventDescriptionTemplate}

        ${destination.pictures.length > 0 ? createEventPhotosTemplate(destination.pictures) : ''}
      </section>
    </section>
  </form>
  `;
};

export { createTripFormCreateTemplate };
