const filterForm = document.querySelector('.map__filters');
const filterInputs = filterForm.querySelectorAll('input, select');

const filtersToDisabled = Array.from(filterInputs);

const activateFilter = (inputs) => {
  filterForm.classList.remove('ad-form--disabled');

  inputs.forEach((element) => {
    element.disabled = false;
  });
};

export {filterForm, filtersToDisabled, activateFilter};
