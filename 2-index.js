"use strict";
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode

/*
 * Математичні оператори (+, -, *, /, %, **)
 */

// const num = 3;
// const num2 = 2;

/*
 ? Дано два числа 10 и 20.
 ? Проведіть над цими числами математичні операції (+ - / *).
*/
// const total = 20 ** 10;
// console.log(total);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const isEven = 30 % 2;
// console.log(isEven);
/*
  ? Дано 90 хвилин, дізнайтесь скільки в даному числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
const totalMinutes = 65;
let hours = totalMinutes / 60;
let minutes = totalMinutes % 60;
hours = Math.floor(hours);
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

/*
 * Number.parseInt() Number.parseFloat()
 */
// const num = prompt("Введіть перше число");
// const num2 = prompt("Введіть друге число");
// console.log(num);
// console.log(num2);

// const result = Number(num) + Number(num2);

// console.log(result);

// let number = "102.5km65191";
// number = Number.parseFloat(number);

// console.log(number);

/*
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/
// const userInput = prompt("Введіть число!");

// console.log(Number(userInput));
// console.log(userInput);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = Number.parseFloat("24.5px");

// console.log(str);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = Number.parseFloat("25.5%");

// console.log(str);

//? Спробуйте привести до числа рядок 'abc'.
// const str = Number("abc");

// console.log(str);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */
// console.log(Math.ceil(3.5)); //4
// console.log(Math.floor(3.5)); //3
// console.log((12345.6859).toFixed(4));
// console.log(Math.max(20, 10, 50, 40, 94)); // 50
// console.log(Math.min(20, 10, 50, 40, 94, -4)); // 50
// console.log(Math.pow(2, 64));
// console.log(2 ** 2);
// console.log(Math.random() * (100 - 1) + 1);
/*
  ? Дане число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// console.log(Math.round(23.5));

/*
  ? Попросіть користувача ввести число та ступінь.
  ?Зведіть число до ступеня і виведіть результат у консоль.
*/

// const number = prompt("Ваше число");
// const pow = prompt("Введіть ступінь");
// console.log(number * pow);
// console.log(Math.pow(number, pow));
// console.log(number ** pow);
/*
  ? Згенеруйте рандомне число:
  ? от 0 до 1;
  ? от 10 до 50.
*/
// const min = 1;
// const max = 100;
// console.log(Math.floor(min + Math.random() * (max + 1 - min)));
// const randomNumber = Math.random();

// console.log(randomNumber);
//? Згенеруйте рандомне число. Мінімальне та максимально значення, отримати від користувача
// const min = 50;
// const max = 100;

// const randomNumber = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(randomNumber);
