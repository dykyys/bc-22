'use strict';
/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю, розраховує
? та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.
*/

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const currenStone = this.stones.find(({ name }) => name === stoneName);
//     return currenStone.price * currenStone.quantity;
//   },

// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

/*
? Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
*/

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },

//   getContacts() {
//     return this.contacts;
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });

// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.log(phonebook.getContacts());

/*
? Створіть об'єкт calculator із трьома методами:
?
? read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
? add() - повертає суму збережених значень.
? mult() - перемножує збережені значення та повертає результат.
*/

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// const calculator = {
//   read(numbers) {
//     this.numbers = numbers;
//   },

//   add() {
//     return this.numbers.reduce((acc, number) => acc + number, 0);
//   },

//   mult() {
//     return this.numbers.reduce((acc, number) => acc * number, 1);
//   },
// };

// calculator.read([10, 20, 60, 7, 45]);
// calculator.read([10, 20, 60, 7, 45]);
// console.log(calculator.add());
// console.log(calculator.mult());
// console.log('------------------');
// calculator.read(150, 250);
// console.log(calculator.add());
// console.log(calculator.mult());
