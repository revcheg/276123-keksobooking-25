import { getData } from './api.js';
import { setupPins } from './map.js';
import { filtersToDisabled, activateFilter } from './filters.js';

let offersArray = [];
const MAX_OFFERS_COUNT = 10;

const getOffers = getData(
  (data) => {
    offersArray = data.slice(0, MAX_OFFERS_COUNT);
    setupPins(offersArray);
    activateFilter(filtersToDisabled);
  });

export { getOffers };
