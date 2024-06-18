import {START_LATITUDE, START_LONGITUDE} from './map.js';

const advertForm = document.querySelector('.ad-form');
const avatarFile = advertForm.querySelector('#avatar');
const titleInput = advertForm.querySelector('#title');
const addressInput = advertForm.querySelector('#address');
const typeSelect = advertForm.querySelector('#type');
const priceInput = advertForm.querySelector('#price');
const checkinSelect = advertForm.querySelector('#timein');
const checkoutSelect = advertForm.querySelector('#timeout');
const roomsSelect = advertForm.querySelector('#room_number');
const guestsSelect = advertForm.querySelector('#capacity');
const featuresField = advertForm.querySelector('.features');
const descriptionInput = advertForm.querySelector('#description');
const photosFile = advertForm.querySelector('#images');
const formSubmit = advertForm.querySelector('.ad-form__submit');
const formReset = advertForm.querySelector('.ad-form__reset');

const elementsToDisabled = [
  avatarFile,
  titleInput,
  addressInput,
  typeSelect,
  priceInput,
  checkinSelect,
  checkoutSelect,
  roomsSelect,
  guestsSelect,
  featuresField,
  descriptionInput,
  photosFile,
  formSubmit,
  formReset
];

const disableForm = () => {
  advertForm.classList.add('ad-form--disabled');

  elementsToDisabled.forEach((element) => {
    element.disabled = true;
  });
};

disableForm();

const activateForm = () => {
  advertForm.classList.remove('ad-form--disabled');
  addressInput.value = `${START_LATITUDE}, ${START_LONGITUDE}`;
  addressInput.readOnly = true;

  elementsToDisabled.forEach((element) => {
    element.disabled = false;
  });
};

export {activateForm, addressInput};
