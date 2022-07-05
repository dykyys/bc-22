'use strict';

const onDocumentScroll = () => {
  console.log(window.pageYOffset);

  if (window.pageYOffset > 800) {
    console.log('4 section');
    const animateSectionREf = document.querySelector('.animated-section');
    animateSectionREf.classList.add('active');
    document.removeEventListener('scroll', throttledScroll);
  }
};

const throttledScroll = _.throttle(onDocumentScroll, 300);

document.addEventListener('scroll', throttledScroll);

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

const sectionsListRef = document.querySelectorAll('.section');

sectionsListRef.forEach(item => (item.style.backgroundColor = getRangomColor()));
