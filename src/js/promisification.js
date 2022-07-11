//? Запит за користувачем на колбэках
// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();

//     if (isDone < 0.5) {
//       const user = {
//         firstName: name,
//         lastName: 'Francis',
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError("Користувача з таким ім'ям не знайдено");
//     }
//   }, 1000);
// };

// const handleSuccessFetch = data => {
//   console.log(data);
// };

// const handleErrorFetch = err => {
//   console.log(err);
// };

// fetchUserByName('Ida', handleSuccessFetch, handleErrorFetch);

//? Запит за користувачем на промісах
// const fetchUserByName = name => {
//   console.log('Робимо запит на сервер...');

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isDone = Math.random();

//       if (isDone < 0.5) {
//         const user = {
//           firstName: name,
//           lastName: 'Francis',
//           age: 30,
//         };

//         resolve(user);
//       } else {
//         reject('Користувач не знайдений');
//       }
//     }, 1000);
//   });

//   return promise;
// };

// fetchUserByName('Ida')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// https://api.github.com/users/dykyys

// function myAsyncFunction(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.addEventListener('load', () => {
//       resolve(xhr.responseText);
//     });
//     xhr.addEventListener('error', () => {
//       reject(xhr.statusText);
//     });
//   });
// }

// myAsyncFunction('https://api.github.com/users/dykyys')
//   .then(data => {
//     console.log(JSON.parse(data));
//   })
//   .catch(console.log);
