'use strict';
export const weatherCardTemplate = ({
  name,
  main,
  sys,
  clouds,
  weather,
}) => /*html*/ `<div class="weather__card">
    <h2 class="city-name">${name}</h2>
    <ul class="weather-info list">
        <li class="weather-info-item">
            <p class="temp">Температура: ${main.temp}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="feels-like-temp">Відчувається як: ${main.feels_like}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="sunrise-time">Схід сонця: ${sys.sunrise}</p>
        </li>
        <li class="weather-info-item">
            <p class="sunset-time">Захід сонця: ${sys.sunset}</p>
        </li>
        <li class="weather-info-item">
            <p class="clouds">Хмарність: ${clouds.all}%</p>
        </li>
        <li><img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="" /></li>
    </ul>
</div>`;
{
  /* <div class="weather__card">
    <h2 class="city-name">{{this.name}}</h2>
    <ul class="weather-info list">
        <li class="weather-info-item">
            <p class="temp">Температура: {{this.main.temp}}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="feels-like-temp">Чувствуется как: {{this.main.feels_like}}<sup>&#176;</sup></p>
        </li>
        <li class="weather-info-item">
            <p class="sunrise-time">Восход солнца: {{this.sys.sunrise}}</p>
        </li>
        <li class="weather-info-item">
            <p class="sunset-time">Заход солнца: {{this.sys.sunset}}</p>
        </li>
        <li class="weather-info-item">
            <p class="clouds">Облаков: {{this.clouds.all}}%</p>
        </li>
    </ul>
</div> */
}
