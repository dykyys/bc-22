// https://jsonplaceholder.typicode.com/

import { JsonplaceholderAPI } from './jsonplaceholder-api';

const postsWrapperEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonplaceholderApi = new JsonplaceholderAPI();

jsonplaceholderApi
  .fetchPosts()
  .then(data => {
    postsWrapperEl.innerHTML = createPostsCards(data).join('');
  })
  .catch(err => {
    console.log(err);
  });

const onLoadMoreBtnClick = event => {
  jsonplaceholderApi.page += 1;

  jsonplaceholderApi
    .fetchPosts()
    .then(data => {
      postsWrapperEl.insertAdjacentHTML(
        'beforeend',
        createPostsCards(data).join('')
      );
    })
    .catch(err => {
      console.log(err);
    });
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

function createPostsCards(cards) {
  return cards.map(
    ({ title, body, id }) => `<li class="posts__item">
    <h2 class="posts__title">${title}</h2>
    <p class="posts__text">${body}</p>
    <p class="posts__id">id: ${id}</p>
</li>`
  );
}
