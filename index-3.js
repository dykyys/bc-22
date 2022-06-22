/*
 * forEach() як заміна циклів for і for...of для масивів
 */

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((el, idx, arr) => {
//   console.log('el', el);
//   console.log('idx', idx);
// });

// const ownForEach = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// };
// ownForEach(numbers, (el, idx, arr) => {
//   console.log(el);
//   console.log(idx);
//   console.log(arr);
// });

const numbers = [1, 2, 3, 4, 5];

//Було
// const getTotal = function (numbersArr) {
//   let total = 0;
//   //   // Через обычный for
//   //   for (let i = 0; i < numbersArr.length; i += 1) {
//   //     total += numbersArr[i];
//   //   }

//   // Через звичайний for...of
//   //   for (const num of numbersArr) {
//   //     total += num;
//   //   }

//   //   // Через forEach();
//   numbersArr.forEach((el) => {
//     total += el;
//   });

//   return total;
// };

// console.log(getTotal(numbers));

//Стало
// const getTotal = (numbersArr) => {
//   let total = 0;

//   numbersArr.forEach((el) => {
//     total += el;
//   });

//   return total;
// };

// console.log(getTotal(numbers));

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function logItems(items) {
//   console.log(items);

//   //   for (let i = 0; i < items.length; i += 1) {
//   //     console.log(`${i + 1} - ${items[i]}`);
//   //   }
//   // el, idx, arr;
//   items.forEach((el, idx) => {
//     console.log(`${idx + 1} - ${el}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function printContactsInfo({ names, phones } = {}) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   //   for (let i = 0; i < phoneList.length; i += 1) {
//   //     console.log(i);
//   //     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   //   }
//   nameList.forEach((element, index) => {
//     console.log(index);
//     console.log(`${element}: ${phoneList[index]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Виконайте рефакторинг коду, використовуючи метод forEach і стрілочні функції.
*/

// function calсulateAverage(...args) {
//   let total = 0;

//   //   for (let i = 0; i < args.length; i++) {
//   //     total += args[i];
//   //   }

//   args.forEach((el) => {
//     total += el;
//   });

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
