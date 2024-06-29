const filterForm = document.querySelector('.map__filters');
const filterInputs = filterForm.querySelectorAll('input, select');

const filtersToDisabled = Array.from(filterInputs);

export {filterForm, filtersToDisabled};
