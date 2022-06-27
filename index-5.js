/*
 * Створіть метод counter який буде з this брати "i" і збільшувати його на одиницю. Після повертати "i".
 * Використовуйте замикання та bind, щоб встановити змінній "i" різні значення
 * Виведіть результат у консоль
 */

// function counter() {
//   return function () {
//     this.i += 1;

//     return this.i;
//   };
// }

// const counter1 = counter().bind({ i: 1 });
// const counter2 = counter().bind({ i: 100 });
// console.dir(counter1);
// console.log(counter1());
// console.log(counter2());
//Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.
//Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// // makeDish('Mango', 'apple pie');
// // makeDish('Poly', 'muffins');

// const makeShef = function (shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };
// const mango = makeShef('Mango');

// mango('apple pie');
// mango('beef stew');
// mango('tea');
// // console.log(mango);
// const poly = makeShef('Poly');
// poly('pancakes');
// poly('eggs and bacon');
// console.dir(poly);
// const makeShef = function (name) {
//   /*
//    * Параметр name це локальна змінна для функції makeShef.
//    * Це означає, що вона буде доступна функції makeDish через замикання.
//    */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');
// mango("apple pie"); // Mango is cooking apple pie
// mango("beef stew"); // Mango is cooking beef stew

// const poly = makeShef('Poly');
// poly("pancakes"); // Poly is cooking pancakes
// poly("eggs and bacon"); // Poly is cooking eggs and bacon

/*
 * Створіть функцію hostGuests яка поверне ім'я будинку та гостей у ньому
 * Викличте її за допомогою call і apply поставивши контекст і гостей як аргумент
 */

// const guests = ['Anna', 'Jack', 'Jimmy'];

// const place1 = {
//   house: 'Palace',
// };
// const place2 = {
//   house: 'Barn',
// };

// function hostGuests(...currentGuests) {
//   console.log(`${currentGuests.join(', ')} are staying in ${this.house}`);
// }

// hostGuests.apply(place1, [...guests, 'John', 'Mango', 'R2D2']);
// hostGuests.call(place1, 'John', 'Mango', 'R2D2', ...guests);
// hostGuests.apply(place2, guests);

// hostGuests.apply(place1, [...guests, 'John']);
// Anna, Jack, Jimmy, John are staying in Palace

/*
 * Працюємо з колекцією товарів у кошику:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     const item = this.items.find(({ name }) => name === product.name);
//     if (item) {
//       item.quantity += 1;
//       return;
//     }
//     const newProduct = {
//       quantity: 1,
//       ...product,
//     };
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     this.items = this.items.filter(({ name }) => name !== productName);
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     return this.items.reduce(
//       (acc, { price, quantity }) => acc + price * quantity,
//       0
//     );
//   },
//   increaseQuantity(productName) {
//     const item = this.items.find(({ name }) => name === productName);
//     item.quantity += 1;
//   },
//   decreaseQuantity(productName) {
//     const item = this.items.find(({ name }) => name === productName);
//     if (item.quantity === 1) {
//       this.remove(productName);
//       return;
//     }
//     item.quantity -= 1;
//   },
// };

// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍇', price: 70 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.remove('🍎');
// cart.remove('🍋');
// // cart.clear();
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍇');
// cart.decreaseQuantity('🍇');
// // cart.decreaseQuantity('🍇');
// console.log(cart.countTotalPrice());
// console.table(cart.getItems());

/*
 * Виправте помилки, щоб код працював
 */
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

/*
 * Виправте помилки, щоб код працював
 */

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));
