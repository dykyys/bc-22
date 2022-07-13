import { createClient } from 'pexels';

const defaultImg =
  'https://scontent.fiev6-1.fna.fbcdn.net/v/t39.30808-6/274854555_5085099884844638_7908796515724033969_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=EG4tuE623rYAX98_9sj&_nc_ht=scontent.fiev6-1.fna&oh=00_AT9lQakJdoMNFb6BqdmKJLr-fiAi20CPPLg42fnzsi-LMA&oe=62D37DFA';
const randomNumber = max => {
  return Math.floor(Math.random() * max);
};

export const setBackground = query => {
  const client = createClient(
    '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74'
  );

  client.photos
    .search({ query, per_page: 50, size: 'large', orientation: 'landscape' })
    .then(({ photos }) => {
      const index = randomNumber(photos.length);

      let src = photos[index]?.src?.landscape;

      src ??= defaultImg;

      // if (src === null || src === undefined) {
      //   src = defaultImg;
      // }

      document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),
  url('${src}') center fixed; background-size: cover;`;
    });
};
