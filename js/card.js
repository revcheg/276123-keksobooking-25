import {arrayCards} from './data.js';
import {setContent, setFeatures, setPhotos, setAvatar} from './utilities.js';

const mapElement = document.querySelector('.map__canvas');
const cardTepmlate = document.querySelector('#card').content.querySelector('.popup');

const similarCardFragment = document.createDocumentFragment();

arrayCards.forEach((card) => {
  const cardElement = cardTepmlate.cloneNode(true);

  setContent(cardElement, '.popup__title', card.offer.title);
  setContent(cardElement, '.popup__text--address', card.offer.address);
  setContent(cardElement, '.popup__text--price', `${card.offer.price} ₽/ночь`);
  setContent(cardElement, '.popup__type', card.offer.type);
  setContent(cardElement, '.popup__text--capacity', `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`);
  setContent(cardElement, '.popup__text--time', `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  setContent(cardElement, '.popup__description', card.offer.description);

  setFeatures(cardElement, card.offer.features);
  setPhotos(cardElement, card.offer.photos);
  setAvatar(cardElement, card.author.avatar);

  similarCardFragment.appendChild(cardElement);
});

mapElement.appendChild(similarCardFragment);
