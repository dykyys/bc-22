'use strict';
const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryListRef = document.querySelector('.js-gallery');

const itemsList = pictures.map(({ url, alt, width, height }) => {
  const liEl = document.createElement('li');
  liEl.classList.add('gallery__item');

  const linkEl = document.createElement('a');
  linkEl.href = '#';

  const imgEl = document.createElement('img');
  imgEl.src = url;
  imgEl.alt = alt;
  imgEl.width = width;
  imgEl.height = height;

  linkEl.append(imgEl);
  liEl.append(linkEl);
  // galleryListRef.append(liEl);💩
  return liEl;
});

galleryListRef.append(...itemsList);
// console.log(galleryListRef.innerHTML);
