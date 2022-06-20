/*
 * Створення об'єкта (конструктор, літерал).
 * Властивості, ключі (ім'я) та значення
 */

// Сутність фільм (назва, опис, рейтинг, акторський склад, вікове обмеження)
const film = {
  title: 'Matrix',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nemo iusto! Et doloribus praesentium laboriosam dolorem veritatis, magnam atque amet!',
  rating: 4,
  actors: ['Aiden', 'Mason', 'Jimmy'],
  isAdult: true,
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
};
// console.log(film.title);
// film.title = 'Matrix2';
// console.log(film.actors);
// film.actors.push('Obivan');
// console.log(film.actors);
/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// film['preview'] = './images/img.jpg';
// film.preview = './images/img.jpg';

// film.isAdult = false;
// film['isAdult] = false;

/*
 *Короткий запис властивостей
 */

// const username = 'Oleksii';
// const email = 'test@gmail.com';

// const signupData = {
//   username,
//   email,
// };
// const signupData = {
//   username: username,
//   email: email,
// };

// console.log(signupData);

// const firstName = prompt("Введіть ваше ім'я");
// const email = prompt('Ваш email');

// const user = {
//   firstName,
//   email,
// };

// console.log(user);
// const f = {};
// const d = {};
// const a = {
//   b: 1,
//   c: 2,
// };
// a[f] = 3;
// a[d] = 4;
// console.log(a);
/*
 * Посилальний тип
 */

// const obj = {
//   a: 1,
//   b: 2,
// };

// const obj2 = obj;

// console.log('obj: ', obj);
// console.log('obj2: ', obj2);
// console.log(obj === obj2);

// obj2.c = 5;

// console.log('obj: ', obj);
// console.log('obj2: ', obj2);
// console.log(obj === obj2);

/*
 *Все у цьому світі об'єкти
 */
// const arr = [1, 2, 3, 4];

// const obj = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));
