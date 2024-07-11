import { getData } from './api.js';
import { setupPins } from './map.js';
import { filtersToDisabled, activateFilter } from './filters.js';

let offersArray = [];
let slicedArray = [];
const MAX_OFFERS_COUNT = 10;

const getOffers = getData(
  (data) => {
    offersArray = data;
    slicedArray = offersArray.slice(0, MAX_OFFERS_COUNT);
    setupPins(slicedArray);
    activateFilter(filtersToDisabled);
  });

export { getOffers, offersArray };
