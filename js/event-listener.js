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

const changeBtnRef = document.querySelector('.js-swap-btn');
const removeBtnRef = document.querySelector('.js-remove-listener');
const imgRef = document.querySelector('.js-img');

const handleCkick = function (event) {
  console.log('btn click');
  imgRef.src = 'https://picsum.photos/200/300';
  imgRef.alt = 'random image';
  console.log('event', event);
  this.style.background = 'lime';
};

const removeListner = () => {
  changeBtnRef.removeEventListener('click', handleCkick);
};

changeBtnRef.addEventListener('click', handleCkick);

removeBtnRef.addEventListener('click', removeListner);

// https://picsum.photos/200/300
