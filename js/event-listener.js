'use strict';
/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?- Найменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// https://picsum.photos/200/300
const imgEl = document.querySelector('.js-img');
const swapBtnEl = document.querySelector('.js-swap-btn');
const removeListenerBtnEl = document.querySelector('.js-remove-listener');

const onSwapBtnClick = function () {
  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'random image';
};

swapBtnEl.addEventListener('click', onSwapBtnClick);
removeListenerBtnEl.addEventListener('click', () => {
  swapBtnEl.removeEventListener('click', onSwapBtnClick);
});
