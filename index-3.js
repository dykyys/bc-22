'use strict';
/*
 * Класи: оголошення, конструктор, методи
 * Приватні властивості та методи
 * Статичні властивості та методи
 * Геттери та сеттери
 */

/*
 * Властивості класу доступні на екземплярах
 * Методи класу доступні на екземплярах
 * Приватні властивості доступні всередині класу, отримати доступ до них можна за допомогою методів класу
 * Приватні методи доступні лише в медодах класа
 * Статичні властивості доступлі лише на сомому класі
 * Статичні методі доступні лише на самому класі
 * Статичні приватні властивості доступні на сомому класі, всередині класу
 * Статичні приватні методи доступні на сомому класі, всередині класу
 */

class CreateUser {
  static pablicEmails = ['pablic@mail.com'];
  static #takenEmails = ['taken@mail.com'];
  static isEmailTaken(email) {
    console.log(CreateUser.#takenEmails);
    // console.log(this.#checkEmail('asdf'));💩
    // return CreateUser.#takenEmails.includes(email);
  }
  #email;
  constructor({
    firstName,
    lastName,
    age,
    hairColor,
    eyesColor,
    gender,
    email,
  }) {
    this.firstName = firstName;

    this.lastName = lastName;
    this.age = age;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    this.gender = gender;
    this.#email = email;
  }

  // getEmail() {
  //   return this.#email;
  // }

  getTakenEmails() {
    console.log(CreateUser.#takenEmails);
  }

  get qwe() {
    return this.gender;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    const includesGmail = this.#checkEmail(newEmail);
    console.log(CreateUser.isEmailTaken(newEmail));
    if (includesGmail) {
      this.#email = newEmail;
    }
  }

  #checkEmail(newEmail) {
    return newEmail.includes('@gmail');
    // if (newEmail.includes('@gmail')) {
    //   return true;
    // }
    // return false;
  }

  changeEmail(newEmail) {
    const includesGmail = this.#checkEmail(newEmail);
    console.log(includesGmail);
    this.#email = newEmail;
  }
}

const user1 = new CreateUser({
  firstName: 'Jeff',
  lastName: 'Tucker',
  age: 30,
  hairColor: 'brown',
  eyesColor: 'brown',
  gender: 'male',
  email: 'kuhhu@od.ye',
});

// console.log(CreateUser.isEmailTaken());
