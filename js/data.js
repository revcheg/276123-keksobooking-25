import {getData} from './api.js';
import {setupPins} from './map.js';
import {filtersToDisabled, activateFilter} from './filter.js';

let arrayCards = [];
const MAX_CARD_COUNT = 10;

const getOffers = getData(
  (data) => {
    arrayCards = data.slice(0, MAX_CARD_COUNT);
    setupPins(arrayCards);
    activateFilter(filtersToDisabled);
  });

export {getOffers};
