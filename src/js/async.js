/*
 * Синхронний vs Асинхронний JS
 */

// Стек виклику функцій

// console.log('Start');

// const id = setTimeout(() => {
//   console.log('In setTimeout');
// }, 5000);

// let count;
// for (let i = 0; i < 10000; i += 1) {
//   count = i;
// }
// console.log(count);

// console.log('End');

// const intervalId = setInterval(() => {
//   console.log(Date.now());
// }, 1000);

// const id = setTimeout(() => {
//   console.log('clear Interval In setTimeout');
//   clearInterval(intervalId);
// }, 10000);

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!
// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
// const intervalId = setInterval(() => {
//   console.log('Hello', Date.now());
// }, 1000);

// document.addEventListener('click', () => {
//   console.log('click document');
//   clearInterval(intervalId);
// });

// for (let i = 0; i < 5; i += 1) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
//   //   console.log(i);
// }
