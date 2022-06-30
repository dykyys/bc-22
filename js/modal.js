'use strict';

const backdropRef = document.querySelector('.js-backdrop');
const openBtnRef = document.querySelector('.js-modal-open');
const closeBtnRef = document.querySelector('.js-modal-close');
// const handleClick = () => {
//   console.log('open modal');
//   backdropRef.classList.toggle('is-open');
// };

// openBtnRef.addEventListener('click', handleClick);
// closeBtnRef.addEventListener('click', handleClick);

const handleOpenClick = () => {
  console.log('open modal');
  backdropRef.classList.toggle('is-open');
  document.addEventListener('keydown', onEscPress);
};

const handleBackdropClick = event => {
  if (event.target === event.currentTarget) {
    console.log('close window');
    handleCloseClick();
  }
};

const handleCloseClick = () => {
  backdropRef.classList.remove('is-open');
  document.removeEventListener('keydown', onEscPress);
};

const onEscPress = event => {
  console.log(event.key);
  if (event.key === 'Escape') {
    handleCloseClick();
  }
};

openBtnRef.addEventListener('click', handleOpenClick);
closeBtnRef.addEventListener('click', handleCloseClick);
backdropRef.addEventListener('click', handleBackdropClick);
