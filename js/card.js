import {arrayCards} from './data.js';

const mapElement = document.querySelector('.map__canvas');
const cardTepmlate = document.querySelector('#card').content.querySelector('.popup');

const similarCardFragment = document.createDocumentFragment();

arrayCards.forEach((card) => {
  const cardElement = cardTepmlate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = card.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${card.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = card.offer.type;
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;

  const featureList = cardElement.querySelector('.popup__features');
  featureList.innerHTML = '';
  card.offer.features.forEach((feature) => {
    let featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature', `popup__feature--${feature}`);
    featureList.appendChild(featureElement);
  });

  cardElement.querySelector('.popup__description').textContent = card.offer.description;

  const photoList = cardElement.querySelector('.popup__photos');
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

  cardElement.querySelector('.popup__avatar').src = card.author.avatar;

  similarCardFragment.appendChild(cardElement);
});

mapElement.appendChild(similarCardFragment);
