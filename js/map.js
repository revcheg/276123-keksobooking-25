// import L from 'leaflet';
import {cards} from './data.js';
import {setContent, setFeatures, setPhotos, setAvatar} from './utilities.js';
import {activateFilter} from './filter.js';
import {activateForm, addressInput} from './form.js';

const START_LATITUDE = 35.6804;
const START_LONGITUDE = 139.7690;
const START_ZOOM = 11;
const MAIN_PIN_WIDTH = 52;
const PIN_WIDTH = 40;

const map = L.map('map-canvas');

const onMapLoad = () => {
  activateFilter();
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

setupMap();

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

const createPopup = (offer, author) => {
  const popupTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = popupTemplate.cloneNode(true);

  setContent(popupElement, '.popup__title', offer.title);
  setContent(popupElement, '.popup__text--address', offer.address);
  setContent(popupElement, '.popup__text--price', `${offer.price} ₽/ночь`);
  setContent(popupElement, '.popup__type', offer.type);
  setContent(popupElement, '.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  setContent(popupElement, '.popup__text--time', `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  setContent(popupElement, '.popup__description', offer.description);

  setFeatures(popupElement, offer.features);
  setPhotos(popupElement, offer.photos);
  setAvatar(popupElement, author.avatar);

  return popupElement;
};

const setupPins = () => {
  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [PIN_WIDTH, PIN_WIDTH],
    iconAnchor: [PIN_WIDTH / 2, PIN_WIDTH],
  });

  cards.forEach(({location, offer, author}) => {
    const pin = L.marker(
      {
        lat: location.x,
        lng: location.y
      },
      {
        icon: pinIcon
      }
    );

    pin
      .addTo(map)
      .bindPopup(
        createPopup(offer, author),
        {
          keepInView: true
        }
      );
  });
};

setupPins();

export {START_LATITUDE, START_LONGITUDE};
