'use strict';

/*
 * Операція spread як заміна concat та slice
 */

//*  Копія масива
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = numbers.slice();

// const numbers2 = [...numbers];
// console.log(numbers2);

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);
// console.log(numbers === numbers2);

// numbers2[0] = 10;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];

// const allNumbers = numbers.concat(numbers2);

// const allNumbers = [...numbers, ...numbers2];

// console.log(allNumbers);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

/*
 * Операція spread як заміна Object.assign({}, ...sources)
 */

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign(o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1); // { a: 1, b: 2, c: 3 }, изменился и сам целевой объект.

// const animal = {
//   legs: 4,
// };

// const cat = Object.create(animal);
// cat.name = 'Kiwi';
// console.log(cat);
// const newCat = _.cloneDeep(cat);
// const newCat = Object.assign(cat);
// const newCat2 = { ...cat };
// console.log(newCat);
// console.log(newCat2);

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const user2 = { ...user };

// console.log('user: ', user);
// console.log('user2: ', user2);
// // console.log(user === user2);

// user2.firstName = 'Birdie';
// console.log('---------------------');
// console.log('user: ', user);
// console.log('user2: ', user2);

//* Розпилення складних типів

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const user2 = _.cloneDeep(user);
// const user2 = { ...user };
// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log(user === user2);
// user2.someArr.push(10);

// console.log('user: ', user);
// console.log('user2: ', user2);

/*
 * Операція rest
 */

//? Напишіть функцію sum, яка додає довільну кількість аргументів які більше вказаного числа
// const sum = function (num, ...args) {
//   //   console.log(num);
//   //   console.log(args);
//   let total = 0;
//   for (const item of args) {
//     // if (item > num) {
//     // console.log(typeof item !== 'number' || Number.isNaN(item));
//     // // console.log(typeof item);
//     // console.log(item);
//     // console.log('------------');
//     if (typeof item !== 'number' || Number.isNaN(item)) {
//       continue;
//     }
//     // console.log(Number.isNaN(item));

//     // console.log(typeof item);
//     total += item;
//     // }
//   }
//   console.log(total);
// };

// const numbers = [1, 2, 3, 4];
// sum(5, 6, 4, NaN, 14, 85, 2, 3, 'df', 'df', 'dfs', NaN);
// console.log(sum(...numbers));
// console.log(sum(10, 20, 30));
// console.log(typeof NaN);
