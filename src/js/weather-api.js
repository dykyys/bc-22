// 'use strict';

const API_KEY = '95632b02f9162f375a368971925f5209';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export function fetchWeatherByCityName(cityName) {
  const url = `${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}

export function fetchWeatherByCoords(lat, lon) {
  const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}
