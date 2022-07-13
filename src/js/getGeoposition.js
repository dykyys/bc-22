import { fetchWeatherByCoords } from './weather-api';
import { createWeatherMarkup } from '../templates/weather-card';
import { getPlaceInfo } from './getPlaceInfo';
import { setBackground } from './setBackground';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    ({ coords: { latitude, longitude } }) => {
      getPlaceInfo(latitude, longitude).then(({ results }) => {
        const { country } = results[0].components;
        setBackground(country);
      });
      fetchWeatherByCoords(latitude, longitude)
        .then(createWeatherMarkup)
        .catch(err => console.log('fetchWeatherByCoords error'));
    }
  );
}
