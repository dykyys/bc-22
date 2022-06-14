"use strict";
/*
 * Цикли (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

let iterator = 0;

// 0 < 5 = true
// 1 < 5 = true
// 2 < 5 = true
// 3 < 5 = true
// 4 < 5 = true
// 5 < 5 = false

// while (iterator < 5) {
//   console.log("iterator: ", iterator);
//   console.log("Hello!");
//   iterator += 1;
//   console.log("iterator: ", iterator);
// }

/*
? Виведіть числа від 1 до 50
*/

// let num = 1;

// while (num <= 50) {
//   console.log(num);

//   // num = num + 1;
//   num += 1;
// }

/*
? Знайдіть суму чисел от 1 до 100
 */

// let number = 1;
// let result = 0;

// while (number <= 100) {
//   // result = result + number;
//   result += number;
//   console.log(result);
//   number += 1;
// }

// console.log(result);

/*
? Дано число n=1000.
?Ділить його на 2 стільки разів, поки результат розподілу не стане менше 50.
? Яке число вийде?
? Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.
*/

// let n = 1000;
// let counter = 0;

// while (n / 2 > 50) {
//   // counte = counter + 1
//   counter += 1;
//   // n = n / 2
//   n /= 2;
//   //   console.log(n);
// }

// console.log(counter);
// console.log(n);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
? Напишіть цикл, який пропонує prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз, і таке інше.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/

// let number = null;

// do {
//   number = Number(prompt("Введіть число більше 100"));
// } while (number < 100);
// console.log(`Ви ввели число ${number}`);
/*
 * For
 */
// for (ініціалізація; умова; пост-вираз) {
// тело цикла
// }

// for (let i = 20; i <= 30; i += 1) {
//   console.log(i);
// }

// for (let i = 0, j = 10; i < j; i += 1, j -= 1) {
//   console.log(j);
// }

/*
?За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 1; i <= 10; i += 1) {
// //   if (!(i % 2)) {
// //     // console.log("i:", i, "i % 2:", i % 2);
// //     console.log(i);
// //   }
//   //   if (i % 2) {
//   //     continue;
//   //   }
//   //   console.log(i);
// }

// for (let i = 0; i < 10; i += 1) {
//   if (i === 3) {
//     console.log("Ми знайшли 3");
//     break;
//   }

//   console.log(i);
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з двома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// 1 Розв'язок
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 2 Розв'язок
// for (let i = 1; i <= 24; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//     continue;
//   }

//   if (i % 3 === 0) {
//     console.log("Fizz");
//     continue;
//   }

//   if (i % 5 === 0) {
//     console.log("Buzz");
//     continue;
//   }

//   console.log(i);
// }
// let t0 = performance.now();
// // let str = "";
// // 3 Розв'язок
// for (let i = 1; i <= 100; i += 1) {
//   let str = "";

//   if (i % 3 === 0) {
//     str += "Fizz";
//   }

//   if (i % 5 === 0) {
//     str += "Buzz";
//   }

//   console.log(str || i);
//   //   str = "";
// }
// let t1 = performance.now();
// console.log("Took", t1 - t0);

/*
https://calculator888.ru/visokosnyy-god/
год, номер которого кратен 400, — високосный;
    остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
    остальные годы, номер которых кратен 4, — високосные[5].
    все остальные годы — невисокосные.
    */

// for (let i = 1700; i <= 2022; i += 1) {
//   if (i % 400 === 0) {
//     console.log(`Високосний рік ${i}`);
//   }
//   if (i % 4 === 0 && i % 100 !== 0) {
//     console.log(`Високосний рік ${i}`);
//   }
// }

/*
 ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

// let star = "*";

// for (let i = 0; i < 7; i += 1) {
//   console.log(star);
//   star += "*";
// }

// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

// const number = 20; // 20

// if (true) {
//   const number = 10; // 10

//   console.log(number); // 10
// }

// console.log(number); // 20

// for (let i = 100; i >= 0; i -= 1) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
// }
