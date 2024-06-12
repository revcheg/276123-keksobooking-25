const getRandomNumber = (min, max, decimals) => {
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

const ROOM_TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_INS = ['12:00', '13:00', '14:00'];
const CHECK_OUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const createCard = () => (
  {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`
    },
    offer: {
      title: 'Добро пожаловать в СМ УТ АТ А',
      // address: `${location.x} ${location.y}`,
      address: '{{location.x}} {{location.y}}',
      price: getRandomNumber(1, 100000),
      type: ROOM_TYPES[Math.floor(getRandomNumber(0, ROOM_TYPES.length))],
      rooms: getRandomNumber(1, 6),
      guests: getRandomNumber(1, 4),
      checkin: CHECK_INS[Math.floor(getRandomNumber(0, CHECK_INS.length))],
      checkout: CHECK_OUTS[Math.floor(getRandomNumber(0, CHECK_OUTS.length))],
      features: FEATURES.slice(0, getRandomNumber(1, FEATURES.length)),
      description: 'Лучшее что есть',
      photos: PHOTOS.slice(0, getRandomNumber(1, PHOTOS.length))
    },
    location: {
      x: getRandomNumber(35.65000, 35.70000, 5),
      y: getRandomNumber(139.70000, 139.80000, 5)
    }
  }
);

// const CARD_COUNT = 10;
// const randomCards = new Array(CARD_COUNT).fill(null).map(() => createCard());
