import { postData } from './api.js';
import { resetMainPin } from './map.js';
import { filtersToDisabled } from './filters.js';

const offerForm = document.querySelector('.ad-form');
const formInputs = offerForm.querySelectorAll('input, select, textarea, button');
const titleInput = offerForm.querySelector('#title');
const addressInput = offerForm.querySelector('#address');
const priceInput = offerForm.querySelector('#price');
const typeSelect = offerForm.querySelector('#type');
const checkinSelect = offerForm.querySelector('#timein');
const checkoutSelect = offerForm.querySelector('#timeout');
const roomsSelect = offerForm.querySelector('#room_number');
const guestsSelect = offerForm.querySelector('#capacity');
const submitButton = offerForm.querySelector('.ad-form__submit');
const resetButton = offerForm.querySelector('.ad-form__reset');

const advertInputs = Array.from(formInputs);
const inputsToDisabled = advertInputs.concat(filtersToDisabled);

const ROOM_PRICES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const syncPrice = (evt) => {
  const selectedType = evt.target.value;
  const roomPrice = ROOM_PRICES[selectedType];
  priceInput.setAttribute('min', roomPrice);
  priceInput.setAttribute('placeholder', roomPrice);
};

typeSelect.addEventListener('input', syncPrice);

const syncCheckin = (evt) => {
  const selectedTime = evt.target.value;
  checkinSelect.value = selectedTime;
  checkoutSelect.value = selectedTime;
};

checkinSelect.addEventListener('input', syncCheckin);
checkoutSelect.addEventListener('input', syncCheckin);

const ROOM_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const syncCapacity = () => {
  const selectedRooms = roomsSelect.value;
  const allowedCapacities = ROOM_CAPACITY[selectedRooms];

  Array.from(guestsSelect.options).forEach((option) => {
    option.disabled = !allowedCapacities.includes(option.value);
  });

  const firstAllowedOption = Array.from(guestsSelect.options).find((option) => !option.disabled);
  guestsSelect.value = firstAllowedOption.value;
};

roomsSelect.addEventListener('input', syncCapacity);

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const validateTitle = () => {
  const titleLength = titleInput.value.length;

  if (titleLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - titleLength} симв.`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите ${MAX_TITLE_LENGTH - titleLength} симв.`);
  } else if (titleInput.checkValidity()) {
    titleInput.style.boxShadow = 'none';
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
};

titleInput.addEventListener('input', validateTitle);

const validatePrice = () => {
  const MIN_PRICE = parseFloat(priceInput.min);
  const MAX_PRICE = parseFloat(priceInput.max);
  const inputValue = parseFloat(priceInput.value);

  if (inputValue < MIN_PRICE) {
    priceInput.setCustomValidity(`Не хватает ещё ${MIN_PRICE - inputValue} денег`);
  } else if (inputValue > MAX_PRICE) {
    priceInput.setCustomValidity(`Максимальная цена ${MAX_PRICE} денег`);
    priceInput.value = MAX_PRICE;
  } else if (priceInput.checkValidity()) {
    priceInput.style.boxShadow = 'none';
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();
};

priceInput.addEventListener('input', validatePrice);

const clearForm = () => {
  offerForm.reset();
  resetMainPin();
};

const clearAddress = (evt) => {
  evt.preventDefault();
  resetMainPin();
};

const validateForm = () => {
  for (const element of formInputs) {
    if (!element.checkValidity()) {
      element.style.boxShadow = '0 0 2px 2px #ED330F';
    } else {
      element.style.boxShadow = 'none';
    }
  }
};

const submitForm = (evt) => {
  evt.preventDefault();

  if (!offerForm.checkValidity()) {
    validateForm();
    return;
  }

  const formData = new FormData(evt.target);
  postData(formData);
  clearForm();
};

offerForm.addEventListener('submit', submitForm);
submitButton.addEventListener('click', validateForm);
resetButton.addEventListener('click', clearAddress);

export { offerForm, advertInputs, inputsToDisabled, addressInput };
