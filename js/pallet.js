'use strict';

const palletItemsRef = document.querySelectorAll('.pallet__item');
const palletListRef = document.querySelector('.js-pallet');

palletItemsRef.forEach(item => {
  const randomColor = getRangomColor();
  item.style.background = randomColor;
  item.dataset.color = randomColor;
});

const palletHandleClick = ({ target }) => {
  const isActive = document.querySelector('.active');

  if (target.nodeName === 'LI' && isActive === target) {
    target.classList.remove('active');
    target.firstElementChild.textContent = '...';
    return;
  }

  if (target.nodeName === 'SPAN' && target.parentNode === isActive) {
    target.parentNode.classList.remove('active');
    target.textContent = '...';
    return;
  }

  if (isActive) {
    isActive.classList.remove('active');
    isActive.firstElementChild.textContent = '...';
  }

  if (target.nodeName === 'LI') {
    target.classList.add('active');
    target.firstElementChild.textContent = target.dataset.color;
    return;
  }

  if (target.nodeName === 'SPAN') {
    target.parentNode.classList.add('active');
    target.textContent = target.parentNode.dataset.color;
  }
};

palletListRef.addEventListener('click', palletHandleClick);

// Для динамічного створення палітри
function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
