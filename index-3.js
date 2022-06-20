/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

//TODO: Через for...in

// let total = 0;

// const arr = [1, 2, 9, 6, 8];

// for (const fasdgasfg of arr) {
//   console.log(fasdgasfg);
// }

// for (const key in salaries) {
//   // console.log(key);
//   // console.log(salaries[key]);
//   total += salaries[key];
// }
// console.log(total);

// console.log(total);

//TODO: Через Object.keys();
// const salariesKeys = Object.keys(salaries);
// console.log(salariesKeys);
// // // let total = 0;

// for (const key of salariesKeys) {
//   total += salaries[key];
// }

// console.log(total);

//TODO: Через Object.values();

// const salariesValues = Object.values(salaries);
// console.log(salariesValues);
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

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);

// const cat = Object.create(animal);
// dog.name = 'Kiwi';

// console.log(dog.hasOwnProperty('legs'));

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
const developersSalaaries = Object.create(salaries);
let total = 0;
developersSalaaries.Obivan = 200;
developersSalaaries.Yoda = 500;
developersSalaaries.Chybaka = 50;
developersSalaaries.DartVaider = 250;
// console.log(developersSalaaries);
// for (const key in developersSalaaries) {
//   // if (developersSalaaries.hasOwnProperty(key)) {
//   //   console.log(key, developersSalaaries.hasOwnProperty(key));
//   //   total += developersSalaaries[key];
//   // }
//   // console.log(key, developersSalaaries.hasOwnProperty(key));
//   if (!developersSalaaries.hasOwnProperty(key)) {
//     // console.log(key, developersSalaaries.hasOwnProperty(key));
//     continue;
//   }
//   console.log(key, developersSalaaries.hasOwnProperty(key));
//   total += developersSalaaries[key];
// }
// const developersSalaariesValues = Object.values(developersSalaaries);
// for (const qwe of developersSalaariesValues) {
//   total += qwe;
// }
// console.log(total);

// const developers = Object.keys(developersSalaaries);
// // console.log(developers);
// for (const name of developers) {
//   // console.log(developersSalaaries[name]);

//   total += developersSalaaries[name];
// }

// console.log(total);

const developersEntries = Object.entries(developersSalaaries);
// console.log(developersEntries);
for (const item of developersEntries) {
  console.log(item);
}
