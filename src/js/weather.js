'use strict';
import 'material-icons/iconfont/material-icons.css';
import { weatherCardTemplate } from '../templates/weather-card';
import { fetchWeatherByCityName } from './weather-api';

const weatherFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${date.getHours()}:${date.getMinutes()}`;
};

const onWeatherFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['user_country'].value.trim();
  console.log(searchQuery);
  fetchWeatherByCityName(searchQuery)
    .then(data => {
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      console.log(data);
      weatherWrapperEl.innerHTML = weatherCardTemplate(data);
    })
    .catch(err => {
      if (err.message === '400' || err.message === '404') {
        console.log('Такого міста не існує');
        return;
      }

      console.log(err);
    });
};

weatherFormEl.addEventListener('submit', onWeatherFormSubmit);
