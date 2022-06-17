/*Напишіть код, який запитуватиме
//Логін за допомогою prompt і логувати результат
//В консоль браузера
// Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
//Інакше виявити рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Здрастуйте!"
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести стороку "Скасовано"
//інакше виводити рядок "Невірний пароль!"
*/
// const userLogin = prompt("Enter login!");

// if (userLogin === "Admin") {
//   const userPassword = prompt("Enter password!");
//   if (userPassword === "I am big boss") {
//     console.log("Hello boss!");
//   } else if (userPassword === null) {
//     console.log("Cencel!");
//   } else {
//     console.log("Password is wrong!");
//   }
// } else if (userLogin === null) {
//   console.log("Cencel!");
// } else {
//   console.log("I don`t know you!");
// }

// switch (userLogin) {
//   case "Admin":
//         const userPassword = prompt("Enter password!");

//     switch (userPassword) {
//       case "I am big boss":
//         console.log("Hello boss!");
//         break;
//       case null:
//         console.log("Cencel!");
//         break;

//       default:
//         console.log("Password is wrong!");
//     }
//     break;
//   case null:
//     console.log("Cencel!");
//     break;

//   default:
//     console.log("I don`t know you!");
// }

/*Напишіть функцію, який замінює регістр кожного символу
//у рядку на протилежний
//Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'
*/

// const str1 = "JavaScript";
// const str2 = "React";

// function updateString(string) {
//   const letters = string.split("");
//   //   const updeteLetters = [];
//   let updateLetters = "";
//   for (const letter of letters) {
//     // console.log(letter.toLowerCase() === letter);
//     if (letter.toLowerCase() === letter) {
//       //   updeteLetters.push(letter.toUpperCase());
//       updateLetters += letter.toUpperCase();
//       continue;
//     }
//     // updeteLetters.push(letter.toLowerCase());
//     updateLetters += letter.toLowerCase();
//   }
//   //   console.log(updeteLetters.join(""));
//   console.log(updateLetters);
// }
// updateString(str1);
// updateString(str2);

/*Напишіть функцію unique(arr), яка повертає масив,
//містить лише унікальні елементи arr.
*/
// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];

// function unique(array) {
//   const uniqueArr = [];
//   for (let i = 0; i < array.length; i++) {
//     console.log("element: ", array[i], "index: ", i);
//     console.log("indexOf", array[i], array.indexOf(array[i]));
//     console.log("indexOf === index", array.indexOf(array[i]) === i);
//     console.log("------------");
//     if (array.indexOf(array[i]) === i) {
//       uniqueArr.push(array[i]);
//     }
//   }
//   console.log(uniqueArr);
// }

// unique(words);
