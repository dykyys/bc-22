'use strict';
// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashAPI();

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['user-search-query'].value;
  unsplashApi.query = searchQuery;
  unsplashApi.page = 1;

  unsplashApi
    .fetchPhotos()
    .then(data => {
      if (!data.results.length) {
        console.log('Images not found!');
        return;
      }

      galleryListEl.innerHTML = createGalleryCards(data.results);
      loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtnClick = event => {
  unsplashApi.page += 1;

  unsplashApi
    .fetchPhotos()
    .then(data => {
      console.log(data);
      if (unsplashApi.page === data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
      }

      galleryListEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

function createGalleryCards(cards) {
  return cards
    .map(
      ({ urls, alt_description }) => `<li class="gallery__item">
    <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
</li>`
    )
    .join('');
}
