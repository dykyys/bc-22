export const getPlaceInfo = (lat, lon) => {
  const API_KEY = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const BASE_URL = 'https://api.opencagedata.com/geocode/v1/json';
  const url = `${BASE_URL}?q=${lat}+${lon}&key=${API_KEY}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};
