import { EVENT_TYPES, DateFormat } from '../../constants.js';
import { capitalizeFirstLetter, getFormattedDate } from '../../utils.js';

const createEventTypeSelectorTemplate = (id, selectedType = 'flight') => `
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-${id}">
      <span class="visually-hidden">Выберите тип события</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${selectedType}.png" alt="Иконка типа события">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${id}" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Тип события</legend>
        ${EVENT_TYPES
    .map((type) => `
            <div class="event__type-item">
              <input id="event-type-${type}-${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${type === selectedType ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-${id}">${capitalizeFirstLetter(type)}</label>
            </div>
          `)
    .join('')}
      </fieldset>
    </div>
  </div>
`;

const createEventDestinationTemplate = (id, selectedDestination = 'Amsterdam', selectedType = 'flight', destinations = []) => `
  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-${id}">
      ${selectedType}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-${id}" type="text" name="event-destination" value="${selectedDestination}" list="destination-list-${id}">
    <datalist id="destination-list-${id}">
      ${destinations.map((destination) => `<option value="${destination}"></option>`).join('')}
    </datalist>
  </div>
`;

const createEventTimeTemplate = (startTime = new Date(), endTime = new Date()) => {
  const startDateFormatted = getFormattedDate(startTime, DateFormat.DATE_TIME);
  const endDateFormatted = getFormattedDate(endTime, DateFormat.DATE_TIME);

  return `
  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">От</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDateFormatted}">
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">До</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDateFormatted}">
  </div>
`;
};

const createEventPriceTemplate = (price = '') => `
  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Цена</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
  </div>
`;


const createOfferSelectorTemplate = ({ id, title, price, name, isChecked = false }) => `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-${id}" type="checkbox" name="event-offer-${name}" ${isChecked ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${name}-${id}">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
`;

const createOffersSectionTemplate = (offers = []) => `
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${offers.map((offer) => createOfferSelectorTemplate(offer)).join('')}
    </div>
  </section>
`;


const createEventDescriptionTemplate = (description = '') => `
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  <p class="event__destination-description">${description}</p>
`;

const createEventPhotosTemplate = (photos = []) => `
  <div class="event__photos-container">
    <div class="event__photos-tape">
      ${photos.map((photo) => `
        <img class="event__photo" src="${photo.src}" alt="Event photo">
      `).join('')}
    </div>
  </div>
`;

const createButtonsTemplate = (isCreateMode) => `
  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">${isCreateMode ? 'Cancel' : 'Delete'}</button>
  ${!isCreateMode ? `<button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>` : ''}
`;

const createTripFormTemplate = ({ point, offers, destination, destinations, isCreateMode = false }) => {
  const offersIds = point.offers.map((currentOffer) => currentOffer.id);

  const preparedOffers = offers.map((offer) => {
    const isChecked = offersIds.includes(offer.id);

    return {
      id: offer.id,
      title: offer.title,
      price: offer.price,
      name: offer.name,
      isChecked
    };
  });

  const eventTypeSelectorTemplate = createEventTypeSelectorTemplate(point.id,point.type);
  const eventDestinationTemplate = createEventDestinationTemplate(point.id, destination.name, point.type, destinations);
  const eventTimeTemplate = createEventTimeTemplate(point.dateFrom, point.dateTo);
  const eventPriceTemplate = createEventPriceTemplate(point.basePrice);
  const eventDescriptionTemplate = createEventDescriptionTemplate(destination.description);

  const hasViewDestinationSection = destination.description || destination.pictures.length > 0;
  const hasViewOffersSection = offers.length > 0;

  return `
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        ${eventTypeSelectorTemplate}
        ${eventDestinationTemplate}
        ${eventTimeTemplate}
        ${eventPriceTemplate}

        ${createButtonsTemplate(isCreateMode)}
      </header>
      <section class="event__details">
        ${hasViewOffersSection ? createOffersSectionTemplate(preparedOffers) : ''}

        ${hasViewDestinationSection ?
    `<section class="event__section  event__section--destination">
            ${destination.description ? eventDescriptionTemplate : ''}

            ${destination.pictures.length > 0 ? createEventPhotosTemplate(destination.pictures) : ''}
          </section>` : ''}
      </section>
    </form>
  `;
};

export { createTripFormTemplate };
