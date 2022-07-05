// 'use strict';

// const galleryEl = document.querySelector('.gallery');
// const bannerImgEl = document.querySelector('.banner__img');
// const galleryImgRef = document.querySelectorAll('.gallery__img');
const galleryListRef = document.querySelector('.gallery');
const bannerRef = document.querySelector('.banner__img');

const changeBannetImg = event => {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== 'IMG') {
    return;
  }

  bannerRef.src = target.dataset.bannerUrl;

  bannerRef.alt = target.alt;
};

galleryListRef.addEventListener('click', changeBannetImg);

// galleryImgRef.forEach(img =>
//   img.addEventListener(
//     'load',
//     event => {
//       event.target.classList.add('appear');
//     },
//     { once: true }
//   )
// );

// const setSouce = () => {
//   galleryImgRef.forEach(img => {
// const source = img.dataset.src;
// img.src = source;
//   });
// };

// const createLazyScript = () => {
//   const script = document.createElement('script');
//   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
//   script.setAttribute(
//     'integrity',
//     'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=='
//   );
//   script.setAttribute('crossorigin', 'anonymous');
//   script.setAttribute('referrerpolicy', 'no-referrer');

//   document.body.append(script);
// };

// if ('loading' in HTMLImageElement.prototype) {
//   //   console.log('Атрибут loading підтримується!');
//   setSouce();
// } else {
//   console.log('Атрибут loading не підтримується!');
//   createLazyScript();
// }

// galleryEl.addEventListener('click', event => {
//   event.preventDefault();

//   const target = event.target;

//   if (target.nodeName !== 'IMG') {
//     return;
//   }

//   const bannerUrl = target.dataset.bannerUrl;
//   bannerImgEl.src = bannerUrl;
// });

// const galleryImgRef = document.querySelectorAll('.gallery__img');

// lasyLoad(galleryImgRef);
// function lasyLoad(targets) {
//   const option = {
//     rootMargin: '100px',
//   };
//   const onEntry = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const image = entry.target;
//         const src = image.dataset.src;
//         image.src = src;
//         image.classList.add('appear');
//         observer.unobserve(image);
//       }
//     });
//   };
//   const io = new IntersectionObserver(onEntry, option);
//   targets.forEach(target => io.observe(target));
// }

const galleryImgRef = document.querySelectorAll('.gallery__img');

const lasyLoad = targets => {
  const options = {
    rootMargin: '150px',
  };

  const onEntry = (entries, observer) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        const source = target.dataset.src;
        target.src = source;
        target.classList.add('appear');
        observer.unobserve(target);
      }
    });
  };

  const io = new IntersectionObserver(onEntry, options);

  targets.forEach(target => io.observe(target));
};

lasyLoad(galleryImgRef);
