import {START_LATITUDE, START_LONGITUDE} from './map.js';
import {filterForm} from './filter.js';
import {advertForm, advertInputs, addressInput} from './form.js';

const disableForm = (inputs) => {
  filterForm.classList.add('ad-form--disabled');
  advertForm.classList.add('ad-form--disabled');

  inputs.forEach((element) => {
    element.disabled = true;
  });
};

const activateForm = () => {
  advertForm.classList.remove('ad-form--disabled');

  addressInput.value = `${START_LATITUDE}, ${START_LONGITUDE}`;
  addressInput.readOnly = true;

  advertInputs.forEach((element) => {
    element.disabled = false;
  });
};

export {disableForm, activateForm};
