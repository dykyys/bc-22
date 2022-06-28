'use strict';
/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні властивості об'єкта та не власні властивості

// const user = {
//   firstName: 'Isaac',
//   age: 40,
// };

// const user2 = Object.create(user);
// user2.lastName = 'Nyton';
// user2.sex = 'man';
// console.log(user2.__proto__);
// console.log(user2);
// console.log(user2.age);
// user2.firstName = 'Louis';
// console.log(user2);
// console.log(user2.hasOwnProperty('age'));
// console.log(user2);
// console.log(user2.age);
// user2.lastName = 'Miller';

// const user3 = Object.create(user2);
// user3.firstName = 'Jordan';

// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log('user3: ', user3);

//* Перевірка властивих властивостей obj.hasOwnProperty()
// console.log(user3.hasOwnProperty('age'));

//* Цикл for...in, перебирає всі властивості, і власні та не власні.

// for (const prop in user2) {
//   //   console.log(prop);
//   if (user2.hasOwnProperty(prop)) {
//     // console.log(prop);
//     console.log(user2[prop]);
//   }
// }

// const keysUser2 = Object.keys(user2);
// console.log(keysUser2);

const numbers = [1, 2, 3];
numbers.push();
console.log(numbers.__proto__);

// const num = 10.25;

// new String(str);

// new Number(num);

// console.dir(Number);

// console.log(num.toFixed(1));
