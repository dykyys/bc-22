"use strict";
/*
 * Розгалуження if
 */

// if (умова) {
// тіло if
// }

// const num = 18;

// if (num >= 18) {
//   console.log("Hello!");
// } else {
//   console.log(" Good bye!");
// }

/*
? Дано рядок, що складається із символів, наприклад, 'abcde'.
? Перевірте, що першим символом цього рядка є буква 'a'.
? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
*/

// const str = "abcde";
// console.log(str.startsWith("a"));
// if (str.startsWith("a")) {
//   console.log("Так");
// } else {
//   console.log("Ні");
// }

// const messege = str.startsWith("a") ? "Yes" : "No";

// console.log(messege);

/*
? Запросити у користувача число, якщо число дорівнює 10,
? то виведіть 'Вірно', інакше виведіть 'Неправильно'.
*/

// const number = Number(prompt("Введіть число"));

// if (number === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Невірно");
// }

/*
? У змінній min лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) – перша чверть години
? [15 до 30) – друга чверть години
? [30 до 45) – третя чверть години
? [45 до 60) – четверта чверть години
*/

// const min = 61;

// if (min >= 0 && min < 15) {
//   console.log("перша чверть години");
// } else if (min >= 15 && min < 30) {
//   console.log("друга чверть години");
// } else if (min >= 30 && min < 45) {
//   console.log("третя чверть години");
// } else if (min >= 45 && min < 60) {
//   console.log("четверта чверть години");
// } else {
//   console.log("Ви не потрапили в діапозон години!");
// }

/*
? Напишіть код, який запитуватиме:
? 'Яка «офіційна» назва JavaScript?'
? Якщо користувач вводить ECMAScript,
? то показати: «Вірно!», інакше – відобразити: «Не знаєте? ECMAScript!
*/

// const userInput = prompt("Яка «офіційна» назва JavaScript?");

// const ofName = "ECMAScript".toLowerCase();

// // const userInputModify = userInput.toLowerCase().trim();

// const userInputToLowerCase = userInput.toLowerCase();
// const userInputToLowerCaseWithoutSpase = userInputToLowerCase.trim()

// if (userInputToLowerCaseWithoutSpase === ofName) {
//   console.log("Вірно!");
// } else {
//   console.log("Не знаєте? ECMAScript!");
// }

/*
? Напишіть код, який отримує число через prompt, а потім виводить у console.log:
? 1, якщо значення більше нуля,
? -1, якщо значення менше нуля,
? 0, якщо значення дорівнює нулю.
? Передбачається, що користувач вводить лише цифри.
*/

// const number = Number(prompt("Введіть число"));

// if (number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
? Перевірте за допомогою об'єкта navigator та властивості userAgent
? який браузер у користувача, результат вивести в консоль
*/

// const userBrowser = navigator.userAgent;
// console.log(userBrowser);
// console.log(userBrowser.includes("Chrome"));
// console.log(userBrowser.includes("Safari"));
// // if (userBrowser.includes("IE")) {
// //   console.log("Браузер Chrome");
// // } else if (userBrowser.includes("Safari")) {
// //   console.log("Браузер Safari");
// // }

// let message = "Вашого браузера в нашому скиску немає";

// if (userBrowser.includes("IE")) {
//   message = "Браузер IE";
// } else if (userBrowser.includes("Opera")) {
//   message = "Браузер Opera";
// }

// console.log(message);

/*
 * Switch case
 */

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

/*
? Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = 4;

// let message = "";

// switch (number) {
//   case 1:
//     message = "Змінна number має значення 1";
//     break;
//   case 2:
//     message = "Змінна number має значення 2";
//     break;

//   case 3:
//     message = "Змінна number має значення 3";
//     break;

//   default:
//     message = "Змінна number має більше значення ніж 3";
//     break;
// }

// const number = 2;

// switch (number) {
//   case 1:
//     console.log("Змінна number має значення 1");
//     break;
//   case 2:
//     console.log("Змінна number має значення 2");
//     break;
//   case 3:
//     console.log("Змінна number має значення 3");
//     break;
//   default:
//     console.log("Змінна number має більше значення ніж 3");
// }

// if (number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }
// const min = 10;

// const inTime = true;
// console.log(inTime === min >= 0 && min < 15);
// switch (inTime) {
//   case min >= 0 && min < 15:
//     console.log("перша чверть години");
//     break;
//   case min >= 15 && min < 30:
//     console.log("друга чверть години");
//     break;
//   case min >= 30 && min < 45:
//     console.log("третя чверть години");
//     break;
//   case min >= 45 && min < 60:
//     console.log("черверта чверть години");
//     break;

//   default:
//     console.log("Ви не потрапили в діапозон години!");
//     break;
// }

// const number = Number(prompt("Введіть число між 0 та 3", ""));

// switch (number) {
//   case 0:
//     console.log("Ви ввели число 0");
//     break;

//   case 1:
//     console.log("Ви ввели число 1");
//     break;

//   case 2:
//     console.log("Ви ввели число 2");
//     break;

//   case 3:
//     console.log("Ви ввели число 3");
//     break;

//   default:
//     console.log("Ви ввели якесь інше число");
// }

// if (number === 0) {
//   console.log("Ви ввели число 0");
// } else if (number === 1) {
//   console.log("Ви ввели число 1");
// } else if (number === 2) {
//   console.log("Ви ввели число 2");
// } else if (number === 3) {
//   console.log("Ви ввели число  3");
// } else {
//   console.log("Ви ввели якесь інше число");
// }

/*
 * Тернарний оператор
 */

//<умова>? <вираз_якщо_умова_істинна> : <вираз_якщо_умова_хибна>

/*
? Перепишіть конструкцію if з використанням умовного оператора '?':
*/
// const a = 2;
// const b = 3;
// let message = "";

// const message = a + b < 4 ? "Мало" : "Багато";

// if (a + b < 4) {
//   message = "Мало";
// } else {
//   message = "Багато";
// }

// console.log(message);

/*
?  Перепишіть if..else за допомогою декількох операторів '?'.
*/

// const login = 'Директор';
// let message =
//   login === "Співробітник"
//     ? "Привіт"
//     : login === "Директор"
//     ? "Здравствуйте"
//     : login === null
//     ? "Немає логіна"
//     : "Ми вас не знаєм";

let message = login === "Співробітник" ? "Привіт" : "Ви не співробітник";
console.log(message);
const login = prompt("Введіть логін!");

// let message = "Ми вас не знаєм!!!";

// if (login === "Співробітник") {
//   message = "Привіт";
// } else if (login === "Директор") {
//   message = "Здравствуйте";
// } else if (login === null) {
//   message = "Немає логіна";
// }

// console.log(message);
