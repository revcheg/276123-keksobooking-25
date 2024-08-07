const DEFAULT_AVATAR = './img/avatars/default.png';

const setAvatar = (element, avatarURL) => {
  const avatarElement = element.querySelector('.popup__avatar');

  if (avatarURL) {
    avatarElement.src = avatarURL;
  } else {
    avatarElement.src = DEFAULT_AVATAR;
  }
};

const setContent = (element, selector, content) => {
  const targetElement = element.querySelector(selector);

  if (content) {
    targetElement.textContent = content;
  } else {
    targetElement.classList.add('hidden');
  }
};

const ROOM_TYPES = {
  bungalow: 'Бунгало',
  flat: 'Квартира',
  hotel: 'Отель',
  house: 'Дом',
  palace: 'Дворец'
};

const setFeatures = (element, features) => {
  const featureList = element.querySelector('.popup__features');

  if (!features || features.length === 0) {
    featureList.classList.add('hidden');
  } else {
    featureList.innerHTML = '';
    features.forEach((feature) => {
      const featureElement = document.createElement('li');
      featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
      featureList.appendChild(featureElement);
    });
  }
};

const setPhotos = (element, photos) => {
  const photoList = element.querySelector('.popup__photos');

  if (!photos || photos.length === 0) {
    photoList.classList.add('hidden');
  } else {
    photoList.innerHTML = '';
    photos.forEach((photo) => {
      const photoElement = document.createElement('img');
      photoElement.src = photo;
      photoElement.classList.add('popup__photo');
      photoElement.width = 45;
      photoElement.height = 40;
      photoElement.alt = 'Фотография жилья';
      photoList.appendChild(photoElement);
    });
  }
};

export { setAvatar, setContent, ROOM_TYPES, setFeatures, setPhotos };
