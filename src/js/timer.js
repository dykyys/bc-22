import { format } from 'date-fns';

import { uk } from 'date-fns/locale';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const TIMER_DEADLINE = new Date(2022, 6, 12, 10, 16);
const timerRef = document.querySelector('.timer__items');

console.log(
  format(new Date(2022, 6, 12, 10, 16), 'do:eeee:ko', { locale: uk })
);

const timer = {
  intervalId: null,
  refs: {},
  datasetValues: {
    days: ['день', 'дня', 'днів'],
    hours: ['година', 'години', 'годин'],
    minutes: ['хвилина', 'хвилини', 'хвилин'],
    seconds: ['секунда', 'секунди', 'секунд'],
  },

  start(rootSelector, deadLine) {
    let delta = deadLine - Date.now();

    if (delta <= 0) {
      Notify.failure('Select date in future!!', {
        timeout: 1500,
      });
      return;
    }

    this.getRefs(rootSelector);

    this.intervalId = setInterval(() => {
      delta = deadLine - Date.now();

      if (delta <= 0) {
        Notify.success('DEADLINE!!!', {
          timeout: 1500,
        });

        clearInterval(this.intervalId);

        return;
      }

      const date = this.convertMs(delta);

      this.updateTextContent(date);
    }, 1000);
  },

  convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  },

  updateTextContent(date) {
    Object.entries(date).forEach(([key, value]) => {
      this.refs[key].textContent = this.addLeadinfZero(value);
      this.refs[key].dataset.title = this.declensionNum(
        value,
        this.datasetValues[key]
      );
    });
  },

  addLeadinfZero(value) {
    return String(value).padStart(2, 0);
  },

  getRefs(rootSelector) {
    this.refs.days = rootSelector.querySelector('.js-timer__days');
    this.refs.hours = rootSelector.querySelector('.js-timer__hours');
    this.refs.minutes = rootSelector.querySelector('.js-timer__minutes');
    this.refs.seconds = rootSelector.querySelector('.js-timer__seconds');
  },
  declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ];
  },
};

timer.start(timerRef, TIMER_DEADLINE);
