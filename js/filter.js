const filterForm = document.querySelector('.map__filters');
const housingType = filterForm.querySelector('#housing-type');
const housingPrice = filterForm.querySelector('#housing-price');
const housingRooms = filterForm.querySelector('#housing-rooms');
const housingGuests = filterForm.querySelector('#housing-guests');
const housingFeatures = filterForm.querySelector('#housing-features');

const filtersToDisabled = [
  housingType,
  housingPrice,
  housingRooms,
  housingGuests,
  housingFeatures
];

const disableFilter = () => {
  filterForm.classList.add('ad-form--disabled');

  filtersToDisabled.forEach((element) => {
    element.disabled = true;
  });
};

disableFilter();

const activateFilter = () => {
  filterForm.classList.remove('ad-form--disabled');

  filtersToDisabled.forEach((element) => {
    element.disabled = false;
  });
};

export {activateFilter};
