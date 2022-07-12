if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    long = position?.coords?.longitude;
    lat = position.coords.latitude;
    let units = 'metric';
    let lang = 'en';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5c8dab899c73e9fec8517804e94f0209&units=metric&lang=en`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {});
    const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
    const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}&language=en`;
    fetch(urlPosition)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        const place =
          data.results[0].components.village || data.results[0].components.city;
        setBacground(place);
      });
  });
}

function setBacground(place) {
  const url = `https://pixabay.com/api/?image_type=backgrounds&orientation=horizontal&q=kyiv&per_page=20&key=16085264-71307d3f0a6fd2ec26a379ecb`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(({ hits }) => {
      console.log(hits);
      const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const randomImg = randomIntegerFromInterval(0, hits.length - 1);
      document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
  url('${hits[randomImg].largeImageURL}') center fixed; background-size: cover;`;
    });
}
