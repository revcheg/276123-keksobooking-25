const POPUP_SHOW_TIME = 5000;

const popupMode = {
  SUCCESS_POST: 'SUCCESS_POST',
  ERROR_POST: 'ERROR_POST',
  ERROR_FETCH: 'ERROR_FETCH'
};

const popupTemplate = {
  [popupMode.SUCCESS_POST]: document.querySelector('#success').content.querySelector('.success'),
  [popupMode.ERROR_POST]: document.querySelector('#error').content.querySelector('.error'),
  [popupMode.ERROR_FETCH]: document.querySelector('#error').content.querySelector('.error')
};

popupTemplate[popupMode.ERROR_FETCH] = popupTemplate[popupMode.ERROR_POST].cloneNode(true);
popupTemplate[popupMode.ERROR_FETCH].querySelector('.error__message').textContent = 'Ошибка получения объявлений';
// popupTemplate[popupMode.ERROR_FETCH].querySelector('.error__button').textContent = 'Добавить объявление';

const createPopup = (mode) => {
  const popupElement = popupTemplate[mode].cloneNode(true);
  document.body.append(popupElement);

  const popupButton = popupElement.querySelector('button');
  if (popupButton) {
    popupButton.addEventListener('click', () => {
      popupElement.remove();
    });
  }

  setTimeout(() => {
    popupElement.remove();
  }, POPUP_SHOW_TIME);
};

export {createPopup, popupMode};
