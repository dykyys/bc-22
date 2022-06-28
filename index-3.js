'use strict';
/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Статичні властивості та методи
 * Геттери та сеттери
 */

class User {
  #userEmail;

  static test = 5;

  constructor(params) {
    // this = {}
    const { firstName, lastName, age, hairColor, eyesColor, gender, email } =
      params;

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.legs = 2;
    this.hands = 2;
    this.eyes = 2;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    this.gender = gender;
    this.#userEmail = email;
    // retrun this;
  }

  changeHairColor(newColor) {
    this.hairColor = newColor;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get email() {
    return this.#userEmail;
  }

  set email(newEmail) {
    this.#userEmail = newEmail;
  }
}

const user = new User({
  firstName: 'Jeff',
  lastName: 'Tucker',
  age: 30,
  hairColor: 'brown',
  eyesColor: 'brown',
  gender: 'male',
  email: 'kuhhu@od.ye',
});

const user2 = new User({
  firstName: 'Jean',
  lastName: 'Smith',
  age: 40,
  hairColor: 'pink',
  eyesColor: 'blue',
  gender: 'female',
  email: 'se@na.mv',
});

console.dir(User);
console.log(user);
