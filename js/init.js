import {START_LATITUDE, START_LONGITUDE, setupMap} from './map.js';
import {filterForm} from './filter.js';
import {advertForm, addressInput, inputsToDisabled} from './form.js';

const disableForm = (inputs) => {
  filterForm.classList.add('ad-form--disabled');
  advertForm.classList.add('ad-form--disabled');

  inputs.forEach((element) => {
    element.disabled = true;
  });
};

disableForm(inputsToDisabled);

const activateForm = () => {
  filterForm.classList.remove('ad-form--disabled');
  advertForm.classList.remove('ad-form--disabled');

  addressInput.value = `${START_LATITUDE}, ${START_LONGITUDE}`;
  addressInput.readOnly = true;

  inputsToDisabled.forEach((element) => {
    element.disabled = false;
  });
};

const initializeApp = () => {
  setupMap();
};

initializeApp();

export {activateForm};
