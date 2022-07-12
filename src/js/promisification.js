//? Запит за користувачем на колбэках

// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();
//     if (isDone < 0.5) {
//       console.log('success');
//       const user = {
//         name: 'Mango',
//         mail: 'mango@gmail.com',
//         age: 21,
//       };
//       onSuccess(user);
//     } else {
//       console.log('error');

//       onError(`${name} not found!`);
//     }
//   }, 1000);
// };

// const onSuccess = data => {
//   console.log(data);
// };

// const onError = error => {
//   console.log(error);
// };

// fetchUserByName('Mango', onSuccess, onError);

//? Запит за користувачем на промісах

// const fetchUserByName = name => {
//   console.log('Робимо запит на сервер...');

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isDone = Math.random();
//       if (isDone < 0.5) {
//         const user = {
//           name: 'Mango',
//           mail: 'mango@gmail.com',
//           age: 21,
//         };

//         resolve(user);
//       } else {
//         reject(`${name} not found!`);
//       }
//     }, 1000);
//   });
// };

// const onSuccess = data => {
//   console.log(data);
// };

// const onError = error => {
//   console.log(error);
// };

// fetchUserByName('Mango').then(onSuccess).catch(onError);

// https://api.github.com/users/dykyys
//https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

function getUser(name) {
  const url = `https://api.github.com/users/${name}`;

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.addEventListener('load', () => {
      resolve(xhr);
    });
    xhr.addEventListener('error', () => {
      reject(xhr.statusText);
    });
  });
}
getUser('dykyys')
  .then(({ status, responseText }) => {
    if (status === 200) {
      return responseText;
    }
    throw new Error(' User not found!');
  })
  .then(data => console.log('Success!', JSON.parse(data)))
  .catch(error => console.log(error));
