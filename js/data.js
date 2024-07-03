import {showMessage} from './utilities.js';
import {createFetch} from './api.js';
import {setupPins} from './map.js';
import {filtersToDisabled, activateFilter} from './filter.js';

let arrayCards = [];
const MAX_CARD_COUNT = 10;

const fetchCards = createFetch(
  (data) => {
    arrayCards = data.slice(0, MAX_CARD_COUNT);
    setupPins(arrayCards);
    activateFilter(filtersToDisabled);
  },
  // eslint-disable-next-line no-unused-vars
  (err) => {
    showMessage('Не удалось загрузить похожие объявления');
  });

export {fetchCards};
