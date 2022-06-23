/* ============== Метод map() ============== */
// const ownMap = function (arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(callback(arr[i], i, arr));
//   }

//   return newArr;
// };

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsInUpperCase = ownMap(planets, planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = ownMap(planets, planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// console.log(planets);

/* ============== Метод filter() ============== */
// const ownFilter = function (arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// };

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = ownFilter(values, value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = ownFilter(values, value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = ownFilter(values, value => value > 1000);
// console.log(bigValues); // []

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

/* ============== Метод find() ============== */
// const ownFind = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return arr[i];
//     }
//   }

//   return undefined;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(ownFind(colorPickerOptions, option => option.label === 'blue')); // { label: 'blue', color: '#2196F3' }
// console.log(ownFind(colorPickerOptions, option => option.label === 'pink')); // { label: 'pink', color: '#E91E63' }
// console.log(ownFind(colorPickerOptions, option => option.label === 'white')); // undefined

/* ============== Метод findIndex() ============== */
// const ownFindIndex = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       return i;
//     }
//   }

//   return -1;
// };

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'blue')); // 2
// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'pink')); // 3
// console.log(ownFindIndex(colorPickerOptions, option => option.label === 'white')); // -1

/* ============== Метод every() ============== */
// const ownEvery = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);
//     if (result) {
//       continue;
//     }

//     return false;
//   }

//   return true;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every поверне true тільки якщо всіх фруктів буде більше ніж 0 штук
// const allAvailable = ownEvery(fruits, fruit => fruit.amount > 0); // false
// console.log(allAvailable);

/* ============== Метод some() ============== */
// const ownSome = function (arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const result = callback(arr[i], i, arr);

//     if (result) {
//       return true;
//     }
//   }

//   return false;
// };

// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // some поверне true якщо хоча б одного фрукта буде більше ніж 0 штук
// const anyAvailable = ownSome(fruits, fruits => fruits.amount > 0); // true
// console.log(anyAvailable);

/* ============== Метод reduce() ============== */
// const ownReduce = function (arr, callback, initialValue = 0) {
//   for (let i = 0; i < arr.length; i += 1) {
//     initialValue = callback(initialValue, arr[i], i, arr);
//   }

//   return initialValue;
// };

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const totalScore = ownReduce(
//   students,
//   (total, student) => {
//     return total + student.score;
//   },
//   0
// );

// const averageScore = totalScore / students.length;
// console.log(averageScore);

/*
Реалізувати фільтр за якістю amount і отримати
тільки назву моделі
*/
// const getAvailableCarNames = (cars, amountThreshold) => {
//   return cars
//     .filter((car) => car.amount > amountThreshold)
//     .map((car) => car.model);
// };
// console.table(getAvailableCarNames(vehicles, 12));

/*
Реалізувати фільтр за якістю amount і отримати
тільки назву моделі за допомогою reduce
*/

// const getAvailableCarNames = (cars, amountThreshold) => {
//     return cars.reduce((models, car) => {
//         if (car.amount > amountThreshold) {
//             //models.push(car.model);
//             return [...models, car.model]
//         }

//         return models;
//     }, []);
// };
// console.table(getAvailableCarNames(vehicles, 12));

/*
 Зібрати в кожнийТопи масив всіх предметів всіх курсів
виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
*/
// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Function',
//       'Git',
//       'Conditions',
//       'Classes',
//       'GitHub',
//       'DOM',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub'],
//   },
// ];

// const allTopics = courses
//   .flatMap(course => course.topics)
//   .filter((item, index, array) => array.indexOf(item) === index);
// // console.log(allTopics);

/*
Знайти унікальні елементи за допомогою reduce
Потрібно перевірити "same" масиви
числа з першого у квадраті дорівнюють числам другого
*/
// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
// function comp(array1, array2) {
//   if (!array1 || !array2) return false;
//   const sortArray1 = [...array1].sort((a, b) => a - b);
//   const sortArray2 = [...array2].sort((a, b) => a - b);
//   const sortArray1SQR = sortArray1.map((el) => Math.pow(el, 2));
//   for (let i = 0; i < sortArray1SQR.length; i++) {
//     if (sortArray2[i] !== sortArray1SQR[i]) {
//       return false;
//     }
//   }
//   return true;
//   // return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }
// // console.log(comp(a, b));
