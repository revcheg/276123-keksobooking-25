import {setupPins} from './map.js';

let cards = [];
const MAX_CARD_COUNT = 10;

const createFetch = () => {
  fetch('https://26.javascript.htmlacademy.pro/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((json) => {
      cards = json.slice(0, MAX_CARD_COUNT);
      setupPins(cards);
    })
    .catch((err) => {
      console.log(err);
    });
};

export {createFetch};
