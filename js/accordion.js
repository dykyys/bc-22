'use strict';

// const listBtnRef = document.querySelectorAll('.js-accordion-btn');

// const handleBtnClick = event => {
//   const { nextElementSibling } = event.target;
//   nextElementSibling.classList.toggle('active');
// };

// listBtnRef.forEach(item => {
//   item.addEventListener('click', handleBtnClick);
// });

const listRef = document.querySelector('.js-accordion-list');

const handleClick = event => {
  const { nodeName, nextElementSibling } = event.target;

  if (nodeName !== 'BUTTON') {
    return;
  }

  nextElementSibling.classList.toggle('active');
};

listRef.addEventListener('click', handleClick);
