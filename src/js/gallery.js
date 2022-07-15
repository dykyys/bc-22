'use strict';
//https://nhn.github.io/tui.pagination/latest/Pagination#event-beforeMove
//https://github.com/nhn/tui.pagination/blob/production/docs/getting-started.md
//https://github.com/nhn/tui.pagination#-documents
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createGalleryCards } from '../templates/createGalleryCards';
import { UnsplashAPI } from './unsplash-api';
import { getRefs } from './getRefs';

const paganation = new Pagination('#tui-pagination-container', {
  totalItems: 0,
  itemsPerPage: 30,
  visiblePages: 5,
  page: 1,
});

const page = paganation.getCurrentPage();

const refs = getRefs();

const unsplashApi = new UnsplashAPI();

paganation.on('afterMove', popular);

const handleSubmit = event => {
  event.preventDefault();

  const { query } = event.currentTarget.elements;
  searchValue = query.value.trim();

  if (!searchValue) {
    Notify.failure('enter text!');
    return;
  }

  paganation.off('afterMove', popular);
  paganation.off('afterMove', eventSearchPagination);

  refs.list.innerHTML = '';
  unsplashApi.query = searchValue;

  unsplashApi
    .getImages(page)
    .then(({ total, total_pages: totalPages, results: images }) => {
      if (images.length === 0) {
        refs.paganation.classList.add('is-hidden');
        Notify.failure(`Images by ${searchValue} not found!`);
        query.value = '';

        return;
      }

      // const isHidden = document.querySelector('.tui-pagination.is-hidden');
      // if (isHidden) {
      //   isHidden.classList.remove('is-hidden');
      // }

      refs.paganation.classList.remove('is-hidden'); //😎

      paganation.reset(total);

      addGalleryMarkup(images);

      paganation.on('afterMove', eventSearchPagination);
    });
};

refs.form.addEventListener('submit', handleSubmit);

unsplashApi
  .getPopularImages(page)
  .then(({ total, total_pages: totalPages, results: images }) => {
    if (images.length === 0) {
      Notify.failure(`Images by ${searchValue} not found!`);
      query.value = '';
      // refs.paganation.classList.add('is-hidden');
      return;
    }

    refs.paganation.classList.remove('is-hidden'); //😎

    paganation.reset(total);

    addGalleryMarkup(images);
  });

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
  // refs.list.innerHTML = '';
  const markup = createGalleryCards(images);
  refs.list.insertAdjacentHTML('beforeend', markup);
}
