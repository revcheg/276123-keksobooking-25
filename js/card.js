import {arrayCards} from './data.js';

const mapElement = document.querySelector('.map__canvas');
const cardTepmlate = document.querySelector('#card').content.querySelector('.popup');

const similarCardFragment = document.createDocumentFragment();

arrayCards.forEach((card) => {
  const cardElement = cardTepmlate.cloneNode(true);

  const setTextContent = (selector, content) => {
    const element = cardElement.querySelector(selector);
    if (content) {
      element.textContent = content;
    } else {
      element.classList.add('hidden');
    }
  };

  setTextContent('.popup__title', card.offer.title);
  setTextContent('.popup__text--address', card.offer.address);
  setTextContent('.popup__text--price', `${card.offer.price} ₽/ночь`);
  setTextContent('.popup__type', card.offer.type);
  setTextContent('.popup__text--capacity', `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`);
  setTextContent('.popup__text--time', `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  setTextContent('.popup__description', card.offer.description);

  const featureList = cardElement.querySelector('.popup__features');

  if (card.offer.features.length === 0) {
    featureList.classList.add('hidden');
  }

  featureList.innerHTML = '';

  card.offer.features.forEach((feature) => {
    let featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
    featureList.appendChild(featureElement);
  });

  const photoList = cardElement.querySelector('.popup__photos');

  if (card.offer.photos.length === 0) {
    photoList.classList.add('hidden');
  }

  photoList.innerHTML = '';

  card.offer.photos.forEach((photo) => {
    let photoElement = document.createElement('img');
    photoElement.src = photo;
    photoElement.classList.add('popup__photo');
    photoElement.width = 45;
    photoElement.height = 40;
    photoElement.alt = 'Фотография жилья';
    photoList.appendChild(photoElement);
  });

  let avatarElement = cardElement.querySelector('.popup__avatar');

  if (card.author.avatar) {
    avatarElement.src = card.author.avatar;
  } else {
    avatarElement.classList.add('hidden');
  }

  similarCardFragment.appendChild(cardElement);
});

mapElement.appendChild(similarCardFragment);
