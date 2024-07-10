// import L from 'leaflet';
import {activateForm} from './init.js';
import {getOffers} from './data.js';
import {setAvatar, setContent, ROOM_TYPES, setFeatures, setPhotos} from './cards.js';
import {addressInput} from './form.js';

const START_LATITUDE = 35.6804;
const START_LONGITUDE = 139.7690;
const START_ZOOM = 11;
const MAIN_PIN_WIDTH = 52;
const PIN_WIDTH = 40;

const map = L.map('map-canvas');

const onMapLoad = () => {
  getOffers();
  activateForm();
};

const setupMap = () => {
  map
    .on('load', onMapLoad)
    .setView({
      lat: START_LATITUDE,
      lng: START_LONGITUDE,
    }, START_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [MAIN_PIN_WIDTH, MAIN_PIN_WIDTH],
  iconAnchor: [MAIN_PIN_WIDTH / 2, MAIN_PIN_WIDTH],
});

const mainPin = L.marker(
  {
    lat: START_LATITUDE,
    lng: START_LONGITUDE
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

mainPin.addTo(map);

const onMoveMainPin = (evt) => {
  const latLng = evt.target.getLatLng();
  const formattedLatLng = `${latLng.lat.toFixed(5)}, ${latLng.lng.toFixed(5)}`;
  addressInput.value = formattedLatLng;
};

mainPin.on('move', onMoveMainPin);

const createPopup = (card) => {
  const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = popupTemplate.cloneNode(true);

  setAvatar(popupElement, card.author.avatar);

  setContent(popupElement, '.popup__title', card.offer.title);
  setContent(popupElement, '.popup__text--address', card.offer.address);
  setContent(popupElement, '.popup__text--price', `${card.offer.price} ₽/ночь`);
  setContent(popupElement, '.popup__type', ROOM_TYPES[card.offer.type]);
  setContent(popupElement, '.popup__text--capacity', `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`);
  setContent(popupElement, '.popup__text--time', `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  setContent(popupElement, '.popup__description', card.offer.description);

  setFeatures(popupElement, card.offer.features);
  setPhotos(popupElement, card.offer.photos);

  return popupElement;
};

const setupPins = (data) => {
  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [PIN_WIDTH, PIN_WIDTH],
    iconAnchor: [PIN_WIDTH / 2, PIN_WIDTH],
  });

  data.forEach((card) => {
    const pin = L.marker(
      {
        lat: card.location.lat,
        lng: card.location.lng
      },
      {
        icon: pinIcon
      }
    );

    pin
      .addTo(map)
      .bindPopup(
        createPopup(card),
        {
          keepInView: true
        }
      );
  });
};

export {START_LATITUDE, START_LONGITUDE, setupMap, createPopup, setupPins};
