"use strict";
// const guestName = "Манго!";
// console.log(guestName[5]);
/*
 * Конкатенація рядків, шаблонні рядки
 */

/*
  ? Запросіть у користувача ім'я з віком та виведіть у консоль повідомлення:
  ? Hello ім'я_користувача, your age is вік_користувача.
*/

// const username = prompt("Your name?");
// const age = prompt("Your age?");
// // const message =
// //   "Hello" + " " + username + "," + " " + "your age is" + " " + age + ".";
// https://marketplace.visualstudio.com/items?itemName=meganrogge.template-string-converter

// console.log(message);

//? Виконайте завдання вище, використовуючи шаблонні рядки

/*
 * Властивості та методи рядків
 */

//? Запросіть у користувача ім'я та дізнайтесь з кількох символів, що складається з ім'я.
// const username = prompt("Your name?");
// console.log(username.length);
//? Попросіть користувача ввести email і переведіть у нижній регістр.
// let userEmail = prompt("Your email?");
// userEmail = userEmail.toLowerCase();

// console.log(userEmail);

//? Попросіть користувача ввести email і переведіть у верхній регістр
// let userEmail = prompt("Your email?");
// userEmail = userEmail.toUpperCase();

// console.log(userEmail);

/*
  ? Є рядок 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Дізнайтеся, чи є в цьому рядку мова: 'JavaScript', або 'JS'?.
  ? Якщо є, дізнайтесь позицію на якій перебувати цей підрядок
*/

let languagesStr = "HTML, CSS, JS, JS, PHP, React, Vue, Node.js, C, C++";
languagesStr = languagesStr.toLowerCase();
// console.log(languagesStr);
// const subStr = "js";
// const isInclude = languagesStr.includes(subStr);
// console.log(isInclude);
// const indexOfSubStr = languagesStr.indexOf(subStr);

// console.log(indexOfSubStr);

//? У нас є рядок '24px', дізнайтеся на що закінчується цей рядок, на %, rem, em або px;
// const str = "px24";
// const subStr = "px";

// console.log(str.startsWith(subStr));

//? У нас є рядок '23,4', замініть кому на крапку
// let str = "23,4";
// str = str.replace(",", ".");
// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames);
// // str = Number.parseFloat(str);

// console.log(str);

/*
  ? У нас є рядок:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замініть усі входження dog на monkey.
*/
// let str =
//   "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
// str = str.replaceAll("dog", "monkey");

// console.log(str);

//? У нас є дата у форматі '12:05:21', замініть (:) на (.)
// let someDate = "13:06:22";
// someDate = someDate.replaceAll(":", ".");

// console.log(someDate);

/*
  ? Даний рядок'Vasyl Pupkin is 24 years old'.
  ? Скопіюйте з цього рядка окремо ім'я з прізвищем та окремо вік.
*/
// const someStr = "Vasyl Pupkin is 24 years old";
// // const subStr = someStr.slice(0, 12);
// const indexAge = someStr.indexOf("24");
// console.log(indexAge);
// console.log(someStr.slice(indexAge, someStr.length));
