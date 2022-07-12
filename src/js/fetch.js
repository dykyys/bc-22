'use strict';
// https://jsonplaceholder.typicode.com/

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 01
// Створіть функцію getUsers(names), яка отримує на вхід масив логінов користувачів GitHub, робить запит на GitHub за інформацією про них та повертає масив об'єктів користувачів.
// Інформація про користувача GitHub з логіном USERNAME доступна за посиланням: https://api.github.com/users/USERNAME.

// Важливі деталі:

// На кожного користувача повинен бути один запит fetch.
// Запити не повині чекати завершеня один одного. Потрібно, щоб дані поверталися як можна швидше.
// Якщо якийсь запит завершуєтся помилкою або вияволось, що даних о користувачеві немає, то функція повина повертати null в масиві результатів .

// const BASE_URL = 'https://api.github.com';
// const userLogins = ['luxplanjay', 'dykyys'];

// const getUsers = names => {
//   const promises = names.map(el => {
//     return fetch(`${BASE_URL}/users/${el}`).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       return response.json();
//     });
//   });

//   return Promise.all(promises);
// };

// getUsers(userLogins)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
