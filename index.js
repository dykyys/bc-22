"use strict";
/*
 * Функціональні висловлювання та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// function consoleMessage(message = "Default message", num = 10, start = 0) {
//   console.log(start);
//   for (let i = start; i < num; i++) {
//     console.log(message + i);
//   }
// }

// console.log("До виклика consoleMessage");
// consoleMessage("Hello world", 3);
// console.log("Після виклика consoleMessage");

// console.log(consoleMessage("Hello world!!"));

// function addNumbers(a, b) {
//   //   console.log(a + b);
//   return a + b;
// }
// // // console.log(addNumbers(2, 5));
// const sum = addNumbers(2, 5);
// const sum2 = addNumbers(2, 9);
// const sum3 = addNumbers(2, 4);
// const sum4 = addNumbers(92, 5);
// console.log(sum);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);

// const addNumbers = function (a, b) {
//   return a + b;
// };

// const sum = addNumbers(2, 5);

// console.log(sum);
// consoleMessage("I like Java Script!!");
// consoleMessage("Java Script!!");
// function фм'я_функції(праметр_1, параметр_2...) {
// Тіло функції
// }

// const showMessage = function () {
//   console.log('Hello');
// };

// showMessage();

// function showMessage() {
//   console.log('Hello');
// }

// showMessage();

// function showMessage(username = "Some ures") {
//   console.log(`Hello ${username}!`);
// }

// showMessage("Josie Pierce");
// showMessage("Vera Knight");
// showMessage("Alan Lamb");

// function add(a = 0, b = 0) {
//   const result = Number(a) + Number(b);

//   if (result > 100) {
//     return result;
//   }

//   return "Результат менше 100";
// }
// const result = add(90, 50);

// console.log(result);
/*
? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини (зросту).
? Вага та висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// function calcBMI(weight, height) {
//   const normalizeWeight = Number.parseFloat(weight.replace(",", "."));
//   const normalizeHeight = Number.parseFloat(height.replace(",", "."));
//   const BMI = normalizeWeight / Math.pow(normalizeHeight, 2);
//   //   const BMI = normalizeWeight / normalizeHeight ** 2;
//   console.log(BMI);
//   return BMI.toFixed(1);
// }
// const mangoBMI = calcBMI("88,3", "1.75");
// console.log(mangoBMI);
// const pollyBMI = calcBMI("80,3", "1.95");
// console.log(pollyBMI);

/*
? Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
*/

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Один із параметрів не число";
//   }
//   //   if (a < b) {
//   //     return a;
//   //   } else {
//   //     return b;
//   //   }

//   //   if (a < b) {
//   //     return a;
//   //   }
//   //   return b;
//   return a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(5, 1)); // 1

/*
? Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких будуть передані до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// function getRectArea(dimensions) {
//   const dimensionsToArray = dimensions.split(" ");
//   return Number(dimensionsToArray[0]) * Number(dimensionsToArray[1]);
// }

// console.log(getRectArea("8 11")); // 88
// console.log(getRectArea("18 11")); // 198
// console.log(getRectArea("8 21")); // 168

/*
? Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
? який для кожного елемента масиву виводитиме в консоль повідомлення
? у форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатися з першого.
? Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 – Ajax.
*/

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} : ${items[i]}`);
//   }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);
// let total = 100;
// let count = 100;
// const str = "Global scope";
// function addNumbers() {
//   //   const str = "Local scope";
//   //   console.log(str);
//   let total = 0;

//   let count = 0;
//   for (const numbr of arguments) {
//     if (typeof numbr !== "number") {
//       continue;
//     }
//     total += numbr;
//     count += 1;
//   }
//   console.log(total / count);
// }
// addNumbers(
//   "d",
//   "a",
//   "g",
//   1,
//   2,
//   6,
//   4,
//   7,
//   8,
//   9,
//   5,
//   1,
//   5,
//   14,
//   15,
//   48,
//   79,
//   "d",
//   "a",
//   "g"
// );

// function task1() {
//   console.log("before task 2");
//   task2();
//   console.log("after task 2");
//   console.log("Completed task 1");
// }
// function task2() {
//   console.log("before task 3");
//   task3();
//   console.log("after task 3");
//   console.log("Completed task 2");
// }

// function task3() {
//   console.log("Completed task 3");
// }
// console.log("before task 1");
// task1();
// console.log("after task 1");
// function foo() {
//   console.log("foo - start");
//   console.log("foo - 1");
//   baz();
//   console.log("Code back 232");
//   bar();
//   console.log("Code back 234");
//   console.log("foo- end");
// }
// function baz() {
//   console.log("baz - start");
//   console.log("baz - 2");
//   console.log("baz - end");
// }
// function bar() {
//   console.log("bar - start");
//   console.log("bar-3");
//   console.log("bar - end");
// }

// foo();

/*
? Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
? У параметри names і phones будуть передані рядки імен та телефонних номерів, розділені комами.
? Порядковий номер імен та телефонів у рядках вказують на відповідність.
? Кількість імен та телефонів гарантовано однакова.
*/

// function printContactsInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i = 0; i < phonesArr.length; i += 1) {
//     console.log(`${namesArr[i]}: ${phonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// printContactsInfo(
//   "Vera,Carr,Violet,Sherman",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/*
? Напиши функцію findLargestNumber(numbers), яка шукає найбільше число в масиві.
*/

// function findLargestNumber(numbers) {
//   let largestNumber = numbers[0];

//   for (const number of numbers) {
//     // if (number > largestNumber) {
//     //   largestNumber = number;
//     // }
//     // if (number < largestNumber) {
//     //   continue;
//     // }
//     // largestNumber = number;
//     largestNumber = number > largestNumber ? number : largestNumber;
//   }
//   return largestNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
? Усі аругменти будуть лише числами.
*/

// function calcAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс до кінця колекції
? removeCourse(name) - видаляє курс із колекції
? updateCourse(oldName, newName) – змінює ім'я на нове
*/

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCourse(course) {
  const isIncludes = courses.includes(course);
  if (isIncludes) {
    console.log(`${course} вже є в списку!`);
    return;
  }
  courses.push(course);
}

function removeCourse(name) {
  const indexOfcourse = courses.indexOf(name);
  if (indexOfcourse === -1) {
    console.log(`${name} такога курса в списку немає, видалити неможливо!`);
    return;
  }
  courses.splice(indexOfcourse, 1);
}
function updateCourse(oldName, newName) {
  const indexOfcourse = courses.indexOf(oldName);
  if (indexOfcourse === -1) {
    console.log(`${oldName} такога курса в списку немає, замінити неможливо!`);
    return;
  }
  courses.splice(indexOfcourse, 1, newName);
}

addCourse("Express");
addCourse("React");
removeCourse("CSS");
removeCourse("Linux");
updateCourse("HTML", "Vue");
updateCourse("Linux", "Windows");
console.table(courses);
