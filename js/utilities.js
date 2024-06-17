const getRandomNumber = (min, max, decimals = 0) => {
  if (min < 0 || max < 0) {
    throw new Error('Диапазон должен быть положительным');
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  let randomNumber = Math.random() * (max - min) + min;
  randomNumber = parseFloat(randomNumber.toFixed(decimals));
  return randomNumber;
};

const setContent = (element, selector, content) => {
  const targetElement = element.querySelector(selector);
  if (content) {
    targetElement.textContent = content;
  } else {
    targetElement.classList.add('hidden');
  }
};

const setFeatures = (element, features) => {
  const featureList = element.querySelector('.popup__features');

  if (features.length === 0) {
    featureList.classList.add('hidden');
  } else {
    featureList.innerHTML = '';

    features.forEach((feature) => {
      let featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
      featureList.appendChild(featureElement);
    });
  }
};

const setPhotos = (element, photos) => {
  const photoList = element.querySelector('.popup__photos');

  if (photos.length === 0) {
    photoList.classList.add('hidden');
  } else {
    photoList.innerHTML = '';

    photos.forEach((photo) => {
      let photoElement = document.createElement('img');
      photoElement.src = photo;
      photoElement.classList.add('popup__photo');
      photoElement.width = 45;
      photoElement.height = 40;
      photoElement.alt = 'Фотография жилья';
      photoList.appendChild(photoElement);
    });
  }
};

const setAvatar = (element, avatarURL) => {
  let avatarElement = element.querySelector('.popup__avatar');

  if (avatarURL) {
    avatarElement.src = avatarURL;
  } else {
    avatarElement.classList.add('hidden');
  }
};

export {getRandomNumber, setContent, setFeatures, setPhotos, setAvatar};
