'use strict';
// Функціональний підхід

// const menuRef = document.querySelector('.js-menu');

// const menuHandleClick = ({ target }) => {
//   if (target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const { action } = target.dataset;
//   // if (action === 'load') {
//   //   load();
//   // } else if (action === 'save') {
//   //   save();
//   // } else {
//   //   search();
//   // }

//   switch (action) {
//     case 'save':
//       save();
//       break;
//     case 'load':
//       load();
//       break;
//     case 'search':
//       search();
//       break;

//     default:
//       console.log('SOMESING WRONG!!!');
//       break;
//   }
// };

// menuRef.addEventListener('click', menuHandleClick);

// const load = () => {
//   console.log('loading...');
// };

// const save = () => {
//   console.log('saving...');
// };

// const search = () => {
//   console.log('searching...');
// };

// ООП підхід

class Menu {
  constructor(rootSelector) {
    rootSelector.addEventListener('click', this.onBtnClick.bind(this));
  }

  onBtnClick({ target }) {
    if (target.nodeName !== 'BUTTON') {
      return;
    }
    const { action } = target.dataset;
    switch (action) {
      case 'save':
        this.save();
        break;
      case 'load':
        this.load();
        break;
      case 'search':
        this.search();
        break;

      default:
        break;
    }
  }
  save() {
    console.log('savin...');
  }
  load() {
    console.log('loadin...');
  }
  search() {
    console.log('searching...');
  }
}

new Menu(document.querySelector('.js-menu'));
new Menu(document.querySelector('.js-second-menu'));
