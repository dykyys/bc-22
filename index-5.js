/*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? email - email
? age - вік, число
? numberOfPosts - кількість постів, число
? topics - масив тем на яких спеціалізується блогер
? Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
? Добав метод getInfo(),який, повертає рядок: Blogger ${email} is ${вік} years old and has ${кількість постів} posts.
? Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
*/

// class Blogger {
//   #numberOfPosts;
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.#numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${
//       this.#numberOfPosts
//     } posts.`;
//   }

//   #checkValue(value) {
//     // if (Number(value)) {
//     //   return Number(value);
//     // }
//     // return 0;
//     // return Number(value) ? Number(value) : 0;

//     const isNumber = Number(value);
//     return isNumber ? isNumber : 0;
//   }

//   updatePostCount(value) {
//     this.#numberOfPosts += this.#checkValue(value);
//   }
// }

// const r2d2 = new Blogger({
//   email: 'r2d2@gmail.com',
//   age: 21,
//   numberOfPosts: 50,
//   topics: ['wors', 'stars', 'lazer', 'dark size', 'stars ship'],
// });
// r2d2.updatePostCount('40');
// console.log(r2d2.getInfo());

// const c3po = new Blogger({
//   email: 'c3po@gmail.com',
//   age: 22,
//   numberOfPosts: 550,
//   topics: [
//     'wors',
//     'stars',
//     'lazer',
//     'dark size',
//     'stars ship',
//     'languages',
//     'glayder',
//   ],
// });
// c3po.updatePostCount(50);
// console.log(c3po.getInfo());

/*
? Напиши клас Storage, який створює об'єкти для управління складом товарів.
? При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
? Додай методи класу:
? getItems() – повертає масив товарів.
? addItem(item) - отримує новий товар та додає його до поточних.
? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
*/

class Storage {
  constructor(items = []) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  #checkItem(item) {
    return this.items.includes(item);
  }

  addItem(item) {
    const inItems = this.#checkItem(item);

    if (!inItems) {
      this.items.unshift(item);
    }
  }
  removeItem(newItem) {
    this.items = this.items.filter((item) => item !== newItem);
  }
}

// const stor1 = new Storage(['🍎', '🍋', '🍇', '🍑']);
// stor1.addItem('🍌');
// stor1.removeItem('🍋');
// console.log(stor1.getItems());

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email.
*/

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });
// mango.email = 'mango@gmail.com';
// console.log(mango.email);
// mango.login = 'New Mango login';
// console.log(mango.login);

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.email); // poly@mail.com
// poly.email = 'poly@mopva.fj';
// console.log(poly.email); // poly@mopva.fj

/*
? Напиши клас Notes, який управляє колекцією нотаток у властивості items.
? Нотатка це об'єкт із властивостями text та priority.
? Додай класу статичну властивість Priority, в якій зберігатиметься об'єкт із пріоритетами.
?
? {
?   LOW: 'low',
?   NORMAL: 'normal',
?   HIGH: 'high'
? }
?
? Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).
*/

// class Notes {
//   static PRIORITY = { LOW: 'low', NORMAL: 'normal', HIGH: 'high' };
//   constructor(items = []) {
//     this.items = items;
//   }

//   getNotes() {
//     return this.items;
//   }

//   addNotes(note) {
//     this.items.push(note);
//   }

//   removeNotes(textToRemove) {
//     this.items = this.items.filter(({ text }) => text !== textToRemove);
//   }
//   updatePriority(textToUpdade, newPriority) {
//     const itemToUpdate = this.items.find(({ text }) => text === textToUpdade);
//     itemToUpdate.priority = newPriority;
//   }
// }

// const myNotes = new Notes([]);
// myNotes.addNotes({ text: 'My first notes', priority: Notes.PRIORITY.NORMAL });
// myNotes.addNotes({ text: 'My second notes', priority: Notes.PRIORITY.NORMAL });

// myNotes.removeNotes('My first notes');
// myNotes.updatePriority('My second notes', Notes.PRIORITY.HIGH);
// console.log(myNotes.getNotes());

/*
? Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean}
? та оголошує одну властивість on/off вкл/викл (true/false).
? За замовчанням значення властивості on має бути false.
*/

class Toggle {
  constructor({ isOpen = false } = {}) {
    this.on = isOpen;
  }

  toggle() {
    this.on = !this.on;
  }
}

const firstToggle = new Toggle();
firstToggle.toggle(); //true
firstToggle.toggle(); //false
firstToggle.toggle(); //true
firstToggle.toggle(); //false
firstToggle.toggle(); //true
console.log(firstToggle.on);
