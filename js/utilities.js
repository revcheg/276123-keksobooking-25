const getRandomNumber = (min = 0, max, decimals = 0) => {
  if (min < 0 || max < 0) {
    throw new Error('Диапазон должен быть положительным');
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  let randomNumber;

  if (max === min) {
    randomNumber = parseFloat(max.toFixed(decimals));
    return randomNumber;
  }

  randomNumber = Math.random() * (max - min) + min;
  randomNumber = parseFloat(randomNumber.toFixed(decimals));
  return randomNumber;
};

const MESSAGE_SHOW_TIME = 5000;

const showMessage = (message) => {
  const messageTemplate = document.querySelector('#error').content.querySelector('.error');
  const messageElement = messageTemplate.cloneNode(true);
  const messageText = messageElement.querySelector('.error__message');
  const messageButton = messageElement.querySelector('.error__button');

  messageText.textContent = message;
  messageButton.textContent = 'Закрыть';
  messageButton.addEventListener('click', () => {
    messageElement.remove();
  });

  document.body.append(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, MESSAGE_SHOW_TIME);
};

export {getRandomNumber, showMessage};
