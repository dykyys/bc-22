'use strict';
const openPanelBtnEls = document.querySelectorAll('.js-accordion-btn');

const onPanelBtnClick = function (event) {
  const target = event.target;
  const currentPanel = target.nextElementSibling;

  currentPanel.classList.toggle('active');
};

openPanelBtnEls.forEach(el => {
  el.addEventListener('click', onPanelBtnClick);
});
