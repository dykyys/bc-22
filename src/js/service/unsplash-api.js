// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';
// axios.defaults.headers.Authorization =
//   'Client-ID LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

const searchParams = new URLSearchParams({
  per_page: 30,
  client_id: 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc',
  color: 'black',
  orientation: 'portrait',
});

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #page;
  #query;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: 'black',
    orientation: 'portrait',
  });

  constructor() {
    this.#page = 1;
    this.#query = '';
  }

  getImages(query) {
    // const { data } = await axios.get(
    //   `?page=${this.#page}&query=${this.#query}&${this.#searchParams}`
    // );
    // return data;
    return fetch(
      `${this.#BASE_URL}?page=${this.#page}&query=${this.#query}&${
        this.#searchParams
      }`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  updadePage() {
    this.#page += 1;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
