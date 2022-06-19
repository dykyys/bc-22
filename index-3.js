/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

//TODO: Через for...in

// let total = 0;

// for (const key in salaries) {
//   total += salaries[key];
// }

// console.log(total);

//TODO: Через Object.keys();
// const salariesKeys = Object.keys(salaries);

// let total = 0;

// for (const key of salariesKeys) {
//   total += salaries[key];
// }

// console.log(total);

//TODO: Через Object.values();
// const salariesValues = Object.values(salaries);

// let total = 0;

// for (const value of salariesValues) {
//   total += value;
// }

// console.log(total);

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj1 = Object.create(obj);
// obj1.c = 10;

// console.log(obj1);

// for (const key in obj1) {
//   if (obj1.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
