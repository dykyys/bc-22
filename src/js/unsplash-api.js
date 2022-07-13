export class UnsplashAPI {
  #BASE_URL = ' https://api.unsplash.com';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.page = 1;
    this.query = null;
  }

  fetchPhotos() {
    return fetch(
      `${this.#BASE_URL}/search/photos?query=${this.query}&page=${
        this.page
      }&per_page=12&color=black_and_white&client_id=${this.#API_KEY}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
