import { offersArray } from './data.js';
import { setupPins } from './map.js';

const filterForm = document.querySelector('.map__filters');
const filterInputs = filterForm.querySelectorAll('input, select');
const typeSelect = filterForm.querySelector('#housing-type');

const filtersToDisabled = Array.from(filterInputs);

const activateFilter = (inputs) => {
  filterForm.classList.remove('ad-form--disabled');

  inputs.forEach((element) => {
    element.disabled = false;
  });
};

function filterByType(cards) {
  const selectedType = document.querySelector('#housing-type').value;
  return cards.filter((card) => selectedType === 'any' || card.offer.type === selectedType);
}

typeSelect.addEventListener('change', () => {
  // const filteredCards = filterByType(offersArray);
  setupPins(filterByType(offersArray));
});

export { filterForm, filtersToDisabled, activateFilter };
