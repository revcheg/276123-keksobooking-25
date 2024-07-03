import './init.js';
import './utilities.js';
import './api.js';
import './data.js';
import './cards.js';
import './map.js';
import './filter.js';
import './form.js';

import {disableForm} from './init.js';
import {setupMap} from './map.js';
import {inputsToDisabled} from './form.js';

const initApp = () => {
  disableForm(inputsToDisabled);
  setupMap();
};

initApp();
