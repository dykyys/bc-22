// Створення нової дати
// const date = new Date(2022, 3, 7, 12, 5, 0, 0);

// Методи дати

//? TASK 01
// Створіть об'єкт Date для дати: 20 лютого 2012 року, 3 години 12 хвилин.

const targetDate = new Date(2012, 1, 7, 3, 12, 40);
// console.log('👀 > targetDate', targetDate);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const getWeekDay = date => {
//   const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   const index = date.getDay();
//   return daysArr[index];
// };
// console.log(getWeekDay(targetDate));

//? TASK 03
// Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);
//   console.log(date);
//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2104, 1));

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.

// const getSecondsToTomorrow = () => {
//   const now = Date.now();
//   const tomorrow = new Date(2022, 6, 12, 11, 57);
//   const delta = tomorrow - now;
//   console.log(Math.floor(delta / 1000));
// };
// getSecondsToTomorrow();

// setInterval(getSecondsToTomorrow, 1000);
