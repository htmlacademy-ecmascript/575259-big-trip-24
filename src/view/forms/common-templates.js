import { EVENT_TYPES } from '../../contstants.js';
import { capitalizeFirstLetter, getFormattedDate } from '../../utils.js';

const createEventTypeSelectorTemplate = (selectedType = 'flight') => `
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Выберите тип события</span>
      <img class="event__type-icon" width="17" height="17" src="img/icons/${selectedType}.png" alt="Иконка типа события">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Тип события</legend>
        ${EVENT_TYPES
    .map((type) => `
            <div class="event__type-item">
              <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${type === selectedType ? 'checked' : ''}>
              <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalizeFirstLetter(type)}</label>
            </div>
          `)
    .join('')}
      </fieldset>
    </div>
  </div>
`;

const createEventDestinationTemplate = (selectedDestination = 'Amsterdam', selectedType = 'flight') => `
  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
      ${selectedType}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${selectedDestination}" list="destination-list-1">
    <datalist id="destination-list-1">
      <option value="Amsterdam"></option>
      <option value="Geneva"></option>
      <option value="Chamonix"></option>
    </datalist>
  </div>
`;

const createEventTimeTemplate = (startTime = new Date(), endTime = new Date()) => {
  const startDateFormatted = getFormattedDate(startTime, 'D/M/YY HH:mm');
  const endDateFormatted = getFormattedDate(endTime, 'D/M/YY HH:mm');

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

const createOfferSelectorTemplate = (title, price, name, isChecked) => `
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${name}-1" type="checkbox" name="event-offer-${name}" ${isChecked ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${name}-1">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
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

export {
  createEventTypeSelectorTemplate ,
  createEventDestinationTemplate,
  createEventTimeTemplate,
  createEventPriceTemplate,
  createEventDescriptionTemplate,
  createOfferSelectorTemplate,
  createEventPhotosTemplate,
};
