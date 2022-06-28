/*
 * Клас - шаблон за яким будуть створені однотипні об'єкти
 * Примірник/екземпляр - це об'єкт створений за класом
 * Інтерфейс - набір доступних методів та властивостей
 */

//? Функція конструктор

//TODO:  Створюємо людину за образом

function CreateUser({
  firstName,
  lastName,
  age,
  hairColor,
  eyesColor,
  gender,
}) {
  //   const { firstName, lastName, age } = params;

  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.hairColor = hairColor;
  this.eyesColor = eyesColor;
  this.gender = gender;
}

CreateUser.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

CreateUser.prototype.changeHairColor = function (newColor) {
  this.hairColor = newColor;
};

const user = new CreateUser({
  firstName: 'Jeff',
  lastName: 'Tucker',
  age: 30,
  hairColor: 'brown',
  eyesColor: 'brown',
  gender: 'male',
});
// // user.changeHairColor('black');
// // console.log(user);
// console.log(CreateUser.prototype === user.__proto__);
// // console.log(user.__proto__);
const user2 = new CreateUser({
  firstName: 'Jean',
  lastName: 'Smith',
  age: 40,
  hairColor: 'pink',
  eyesColor: 'blue',
  gender: 'female',
});

console.log(user2.getFullName());
console.log(user.__proto__ === user2.__proto__);
