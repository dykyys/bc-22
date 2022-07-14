'use strict';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGalleryCards } from '../templates/createGalleryCards';

import { UnsplashAPI } from './unsplash-api';

import { getRefs } from './getRefs';
const refs = getRefs();

const unsplashApi = new UnsplashAPI();

const handleSubmit = event => {
  event.preventDefault();

  const { query } = event.currentTarget.elements;
  searchValue = query.value.trim();

  if (!searchValue) {
    Notify.failure('enter text!');
    return;
  }

  unsplashApi.page = 1;
  refs.list.innerHTML = '';
  refs.loadMoreBtn.classList.add('is-hidden');

  unsplashApi.query = searchValue;

  unsplashApi
    .getImages()
    .then(({ total, total_pages: totalPages, results: images }) => {
      if (images.length === 0) {
        Notify.failure(`Images by ${searchValue} not found!`);
        query.value = '';
        return;
      }

      const markup = createGalleryCards(images);
      refs.list.insertAdjacentHTML('beforeend', markup);

      if (unsplashApi.page === 1 && totalPages !== 1) {
        refs.loadMoreBtn.classList.remove('is-hidden');
      }
    });
};

const handleClickLoadMore = () => {
  unsplashApi.updadePage();

  unsplashApi
    .getImages()
    .then(({ total, total_pages: totalPages, results: images }) => {
      if (unsplashApi.page >= totalPages) {
        refs.loadMoreBtn.classList.add('is-hidden');
        Notify.info('The end this collection!');
      }

      const markup = createGalleryCards(images);
      refs.list.insertAdjacentHTML('beforeend', markup);
    });
};
refs.loadMoreBtn.addEventListener('click', handleClickLoadMore);
refs.form.addEventListener('submit', handleSubmit);
