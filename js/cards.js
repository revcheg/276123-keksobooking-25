// import {cards} from './data.js';
// import {setContent, setFeatures, setPhotos, setAvatar} from './utilities.js';

// const mapElement = document.querySelector('.map__canvas');
// const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

// const cardsFragment = document.createDocumentFragment();

// cards.forEach(({offer, author}) => {
//   const cardElement = cardTemplate.cloneNode(true);

//   setContent(cardElement, '.popup__title', offer.title);
//   setContent(cardElement, '.popup__text--address', offer.address);
//   setContent(cardElement, '.popup__text--price', `${offer.price} ₽/ночь`);
//   setContent(cardElement, '.popup__type', offer.type);
//   setContent(cardElement, '.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
//   setContent(cardElement, '.popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
//   setContent(cardElement, '.popup__description', offer.description);

//   setFeatures(cardElement, offer.features);
//   setPhotos(cardElement, offer.photos);
//   setAvatar(cardElement, author.avatar);

//   cardsFragment.appendChild(cardElement);
// });

// mapElement.appendChild(cardsFragment);
