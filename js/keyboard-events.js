'use strict';
/*
 *Події клавіатури. keypress, keydown, keyup
 */
//https://www.toptal.com/developers/keycode/for/a

const outputEl = document.querySelector('.js-output');

document.addEventListener('keydown', event => {
  console.log('keydown');
  //   console.log('event keyCode: ', event.keyCode);
  //   console.log('event code: ', event.code);
});
document.addEventListener('keyup', event => {
  console.log('keyup');
  //   console.log('event keyCode: ', event.keyCode);
  //   console.log('event code: ', event.code);
});
