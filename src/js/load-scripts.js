// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */
//? Створіть функцію loadScript(url), яка буде створювати та додавати скрипт на сторінку
//? Передайте кобэк, який буде викликатися по завершеню завантаженя скрипта

//? Опрацюйте помилки

//? Завантаженя декількох скриптів

//? Пекельна піраміда колбеків

// const loadScript = (url, cb) => {
//   const script = document.createElement('script');
//   script.src = url;

//   document.body.append(script);

//   script.addEventListener('load', () => {
//     cb(script);
//   });

//   script.addEventListener('error', () => {
//     cb(null, 'Error');
//   });
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   (script, err) => {
//     if (script) {
//       console.log(`${script.src} завантажився успішно`);

//       loadScript(
//         'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//         (script, err) => {
//           if (script) {
//             console.log(`${script.src} завантажився успішно`);

//             loadScript(
//               'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//               (script, err) => {
//                 if (script) {
//                   console.log(`${script.src} завантажився успішно`);
//                 } else {
//                   console.log(err);
//                 }
//               }
//             );
//           } else {
//             console.log(err);
//           }
//         }
//       );
//     } else {
//       console.log(err);
//     }
//   }
// );

//? Рішення через проміси
// const loadScript = url => {
//   const script = document.createElement('script');
//   script.src = url;

//   document.body.append(script);

//   const promise = new Promise((resolve, reject) => {
//     script.addEventListener('load', () => {
//       resolve(script);
//     });

//     script.addEventListener('error', () => {
//       reject('Error');
//     });
//   });

//   return promise;
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
//   .then(script => {
//     console.log(`${script.src} завантажився успішно`);
//     return loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
//     );
//   })
//   .then(script => {
//     console.log(`${script.src} завантажився успішно`);
//     return loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
//     );
//   })
//   .then(script => {
//     console.log(`${script.src} завантажився успішно`);
//   })
//   .catch(err => {
//     console.log(err);
//   });
