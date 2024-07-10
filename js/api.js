import {showMessage} from './utilities.js';

const handleFetchError = () => {
  showMessage('Не удалось загрузить похожие объявления');
};

const handlePostError = () => {
  showMessage('Не удалось отправить форму');
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
    body
  })
    .then((response) => {
      if (response.ok) {
        showMessage('Объявление размещено');
      } else {
        handlePostError();
      }
    })
    .catch(handlePostError);
};

export {getData, postData};
