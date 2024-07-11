import {createPopup, popupMode} from './popup.js';

const handleFetchError = () => {
  createPopup(popupMode.ERROR_FETCH);
};

const handlePostError = () => {
  createPopup(popupMode.ERROR_POST);
};

const getData = (handleSuccess) => () => {
  fetch('https://26.javascript.htmlacademy.pro/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        handleFetchError();
      }
    })
    .then((data) => {
      handleSuccess(data);
    })
    .catch(handleFetchError);
};

const postData = (body) => {
  fetch('https://26.javascript.htmlacademy.pro/keksobooking', {
    method: 'POST',
    body: body
  })
    .then((response) => {
      if (response.ok) {
        createPopup(popupMode.SUCCESS_POST);
      } else {
        handlePostError();
      }
    })
    .catch(handlePostError);
};

export {getData, postData};
