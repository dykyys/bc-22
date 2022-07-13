'use strict';
import 'material-icons/iconfont/material-icons.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchWeatherByCityName } from './weather-api';
import { createWeatherMarkup } from '../templates/weather-card';
import { setBackground } from './setBackground';
const formRef = document.querySelector('.js-search-form');

const handleSubmit = event => {
  event.preventDefault();
  const { elements } = event.currentTarget;
  const value = elements['user_country'].value.trim();

  if (!value) {
    Notify.failure('Can not be empty!');
    return;
  }
  setBackground(value);
  fetchWeatherByCityName(value)
    .then(createWeatherMarkup)
    .catch(error => Notify.failure(`City ${value} not found!`), {
      timeout: 1500,
    });
  event.currentTarget.reset();
};
formRef.addEventListener('submit', handleSubmit);
