'use strict';
/*
 * Грязні і чисті функції
 */

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };
// console.log(numbers);
// dirtyMultiply(numbers, 5);
// console.log(numbers);

// const pushNumbers = (...args) => {
//   //   console.log(args);
//   //   console.log(...args);
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (numbersArr, ...args) => {
//   const copyNumbersArr = [...numbersArr];
//   //   console.log('copyNumbersArr', copyNumbersArr);
//   //   console.log('numbers', numbers);
//   //   console.log(numbers === copyNumbersArr);
//   copyNumbersArr.push(...args);

//   return copyNumbersArr;
// };

// const changedNumbers = pushNumbers(numbers, 9, 6, 8);

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', changedNumbers);

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function
const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = function (arr) {
//   const numbersCopyArr = [...arr];

//   for (let i = 0; i < numbersCopyArr.length; i += 1) {
//     numbersCopyArr[i] *= 2;
//   }

//   return numbersCopyArr;
// };

// const result = doubleMulti(numbers);

// console.log('numbers: ', numbers);
// console.log('copy of numbers: ', result);
