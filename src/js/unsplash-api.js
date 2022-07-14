const searchParams = new URLSearchParams({
  per_page: 30,
  client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
  color: 'black',
  orientation: 'portrait',
});

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #query;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: 'black',
    orientation: 'portrait',
  });

  constructor() {
    this.#query = '';
  }

  getPopularImages(page) {
    return fetch(
      `${this.#BASE_URL}?page=${page}&query=bad&${this.#searchParams}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  getImages(page) {
    return fetch(
      `${this.#BASE_URL}?page=${page}&query=${this.#query}&${
        this.#searchParams
      }`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
