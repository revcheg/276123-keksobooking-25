import {postData} from './api.js';
import {filtersToDisabled} from './filter.js';

const advertForm = document.querySelector('.ad-form');
const formInputs = advertForm.querySelectorAll('input, select, textarea, button');
const titleInput = advertForm.querySelector('#title');
const addressInput = advertForm.querySelector('#address');
const priceInput = advertForm.querySelector('#price');
const typeSelect = advertForm.querySelector('#type');
const checkinSelect = advertForm.querySelector('#timein');
const checkoutSelect = advertForm.querySelector('#timeout');
const roomsSelect = advertForm.querySelector('#room_number');
const guestsSelect = advertForm.querySelector('#capacity');

const advertInputs = Array.from(formInputs);
const inputsToDisabled = advertInputs.concat(filtersToDisabled);

const ROOM_PRICES = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const onChangePrice = (evt) => {
  const selectedType = evt.target.value;
  const roomPrice = ROOM_PRICES[selectedType];
  priceInput.setAttribute('min', roomPrice);
  priceInput.setAttribute('placeholder', roomPrice);
};

typeSelect.addEventListener('input', onChangePrice);

const onSyncCheckin = (evt) => {
  const selectedTime = evt.target.value;
  checkinSelect.value = selectedTime;
  checkoutSelect.value = selectedTime;
};

checkinSelect.addEventListener('input', onSyncCheckin);
checkoutSelect.addEventListener('input', onSyncCheckin);

const ROOM_CAPACITY = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const onSyncCapacity = () => {
  const selectedRooms = roomsSelect.value;
  const allowedCapacities = ROOM_CAPACITY[selectedRooms];

  Array.from(guestsSelect.options).forEach((option) => {
    option.disabled = !allowedCapacities.includes(option.value);
  });

  const firstAllowedOption = Array.from(guestsSelect.options).find((option) => !option.disabled);
  guestsSelect.value = firstAllowedOption.value;
};

roomsSelect.addEventListener('input', onSyncCapacity);

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const onValidateInput = (evt) => {
  if (evt.target.id === 'title') {
    const titleLength = titleInput.value.length;

    if (titleLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Ещё ${MIN_TITLE_LENGTH - titleLength} симв.`);
    } else if (titleLength > MAX_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Удалите ${MAX_TITLE_LENGTH - titleLength} симв.`);
    } else {
      titleInput.setCustomValidity('');
    }

    titleInput.reportValidity();
  }

  if (evt.target.id === 'price') {
    const MIN_PRICE = parseFloat(priceInput.min);
    const MAX_PRICE = parseFloat(priceInput.max);
    const inputValue = parseFloat(priceInput.value);

    if (inputValue < MIN_PRICE) {
      priceInput.setCustomValidity(`Не хватает ещё ${MIN_PRICE - inputValue} денег`);
    } else if (inputValue > MAX_PRICE) {
      priceInput.setCustomValidity(`Максимальная цена ${MAX_PRICE} денег`);
      priceInput.value = MAX_PRICE;
    } else {
      priceInput.setCustomValidity('');
    }

    priceInput.reportValidity();
  }
};

titleInput.addEventListener('input', onValidateInput);
priceInput.addEventListener('input', onValidateInput);

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  postData(formData);

  advertForm.reset();
};

advertForm.addEventListener('submit', onFormSubmit);

export {advertForm, advertInputs, inputsToDisabled, addressInput};
