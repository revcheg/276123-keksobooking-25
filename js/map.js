// import L from 'leaflet';

const STARTING_LATITUDE = 35.6804;
const STARTING_LONGITUDE = 139.7690;
const STARTING_ZOOM = 9;

const map = L.map('map-canvas');

const setupMap = () => {
  map
    .setView({
      lat: STARTING_LATITUDE,
      lng: STARTING_LONGITUDE,
    }, STARTING_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

setupMap();
