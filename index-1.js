'use strict';
/*
 * Колбеки, функції вищого порядку
 */

// const foo1 = function (callback) {
//   // let callback = foo2;
//   console.log(foo2 === callback);
//   callback();
// };

// const foo2 = function () {
//   console.log(`Hello!`);
// };
// console.log(foo2);

// foo1(foo2);

//? Запит на сервер
// const fetchUser = async function (userUrl, callback) {
//   const response = await fetch(`https://api.github.com/users/${userUrl}`);
//   const result = await response.json();
//   console.log(callback === showInfoAboutUser);
//   callback(result);
// };

// const showInfoAboutUser = function (user) {
//   console.log('showInfoAboutUser', user);
// };

// fetchUser('dykyys', showInfoAboutUser);

//? Реєстрація подій на сторінці
// const userEmail = document.querySelector('.user-email');

// // const logValues = function (e) {
// //   console.log(e.target.value);
// //   //   console.log('Hi!');
// // };

// // userEmail.addEventListener('input', logValues);
// userEmail.addEventListener('input', function (e) {
//   console.log(e.target.value);
//   //   console.log('Hi!');
// });

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колбека.
*/

// const each = function (array, callback) {
//   //   console.log(array);
//   //   console.log(callback);
//   //   console.log(callback === multi);
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// const multi = function (el) {
//   return el * 2;
// };

// const add = function (el) {
//   return el + 2;
// };

// // const logElements = function (el) {
// //   console.log(el);
// // };

// const numbers = [1, 2, 3, 4, 5];

// console.log(each(numbers, multi));
// console.log(each(numbers, add));
// each(numbers, logElements);

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логіює його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і виводить в консоль загальну вартість товару.
*/

// const createProduct = function (product, callback1, callback2) {
//   //   console.log(product);
//   //   console.log(callback1 === logProduct);
//   //   console.log(callback2 === logTotalPrice);
//   const newProduct = {
//     id: Date.now(),
//     ...product,
//   };
//   callback1(newProduct);
//   callback2(newProduct);
// };

// const logProduct = function (product1) {
//   console.log(product1);
// };

// const logTotalPrice = function ({ price, quantity } = {}) {
//   //   console.log(obj);
//   //   console.log(obj.price * obj.quantity);
//   // { price, quantity } = {}
//   //   const { price, quantity } = obj;
//   console.log(`Total price: ${price * quantity}`);
// };

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logProduct);
// createProduct({ name: '🍎', price: 30, quantity: 3 }, logTotalPrice);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
// createProduct(
//   { name: '🍋', price: 20, quantity: 5 },
//   logProduct,
//   logTotalPrice
// );

// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// function registerGuest(name, callback) {
//   //   console.log(callback === greet);
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Kiwi', greet);

// Передаємо інлайн функцію greet у якості колбека
// registerGuest('Манго', function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });
// registerGuest('Манго', function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest('Полі', function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

/*
? Додайте об'єкту  account  методи для
? withdraw(amount, onSuccess, onError)
? і deposit(amount, onSuccess, onError),
? де перший параметр це сума операції,
? а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? якщо amount більше this.balance
? onError(`Amount can't exceed account balance of ${this.balance} credits`)
? інакше знімаємо гроші з балансу і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`)
? якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо
? amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо
? onSuccess(`Account balance: ${this.balance}`)
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },

//   deposit(amount, onSuccess, onError) {
//     // console.log(amount);
//     // console.log(onSuccess === handleSuccess);
//     // console.log(onError === handleError);
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = function (message) {
//   console.log(`✅ Success! ${message}`);
// };

// const handleError = function (message) {
//   console.log(`❌ Error! ${message}`);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
