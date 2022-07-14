'use strict';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGalleryCards } from '../templates/createGalleryCards';
import { UnsplashAPI } from './unsplash-api';
import { getRefs } from './getRefs';

const pagination = new Pagination('#tui-pagination-container', {
  totalItems: 0,
  itemsPerPage: 30,
  visiblePages: 5,
  page: 1,
});

const page = pagination.getCurrentPage();

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

  pagination.off('afterMove', popular);

  refs.list.innerHTML = '';
  unsplashApi.query = searchValue;

  unsplashApi
    .getImages(page)
    .then(({ total, total_pages: totalPages, results: images }) => {
      if (images.length === 0) {
        Notify.failure(`Images by ${searchValue} not found!`);
        query.value = '';
        return;
      }
      pagination.reset(total);

      addGalleryMarkup(images);

      pagination.on('afterMove', eventSearchPagination);
    });
};

refs.form.addEventListener('submit', handleSubmit);

unsplashApi
  .getPopularImages(page)
  .then(({ total, total_pages: totalPages, results: images }) => {
    pagination.reset(total);
    addGalleryMarkup(images);
  });

pagination.on('afterMove', popular);

function popular(event) {
  const currentPage = event.page;
  unsplashApi.getPopularImages(currentPage).then(({ results: images }) => {
    addGalleryMarkup(images);
  });
}

function eventSearchPagination(event) {
  const currentPage = event.page;

  unsplashApi
    .getImages(currentPage)
    .then(({ total, total_pages: totalPages, results: images }) => {
      if (images.length === 0) {
        Notify.failure(`Images by ${searchValue} not found!`);
        query.value = '';
        return;
      }
      addGalleryMarkup(images);
    });
}

function addGalleryMarkup(images) {
  const markup = createGalleryCards(images);
  refs.list.insertAdjacentHTML('beforeend', markup);
}
