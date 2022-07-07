'use strict';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import throttle from 'lodash.throttle';
import localStorApi from './localstorage';

const formRef = document.querySelector('.js-contact-form');
const LOCAL_STORAGE_KEY = 'user-data';
initForm();

const handleSabmit = event => {
  event.preventDefault();
  const { name, email, message } = event.target.elements;

  if (name.value === '' || email.value === '' || message.value === '') {
    Notify.failure('Заповніть всі поля і спробуйте ще раз!');
    return;
  }

  const userData = {};

  const formData = new FormData(formRef);
  formData.forEach((value, name) => {
    console.log(value, name);
    userData[name] = value;
  });

  event.currentTarget.reset();
  localStorApi.remove(LOCAL_STORAGE_KEY);
  Notify.success("Дякуємо за зворотній зв'язок!");
};

const handleInput = event => {
  const { name, value } = event.target;
  let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
  persistedData = persistedData ? persistedData : {};

  persistedData[name] = value;
  localStorApi.save(LOCAL_STORAGE_KEY, persistedData);
};

formRef.addEventListener('input', throttle(handleInput, 300));
formRef.addEventListener('submit', handleSabmit);

function initForm() {
  let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
  if (persistedData) {
    Object.entries(persistedData).forEach(([name, value]) => {
      formRef.elements[name].value = value;
    });
  }
}

// const handleSabmit = event => {
//   event.preventDefault();
//   const { name, email, message } = event.target.elements;

//   // if (name.value === '' || email.value === '' || message.value === '') {
//   //   Notify.failure('Заповніть всі поля і спробуйте ще раз!');
//   //   console.log('заповніть всі поля і спробуйте ще раз!');
//   //   return;
//   // }

//   // const userData = {
//   //   name: name.value,
//   //   email: email.value,
//   //   message: message.value,
//   // };
//   // console.log(userData);

//   const userData = {};

//   const formData = new FormData(formRef);
//   formData.forEach((value, name) => {
//     console.log(value, name);
//     userData[name] = value;
//   });

//   console.log(userData);
//   event.currentTarget.reset();
//   localStorApi.remove(LOCAL_STORAGE_KEY);
//   // localStorage.removeItem('user-data');
// };

// const handleInput = event => {
//   const { name, value } = event.target;

//   // let persistedData = localStorage.getItem('user-data');
//   // persistedData = persistedData ? JSON.parse(persistedData) : {};
//   let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
//   persistedData = persistedData ? persistedData : {};
//   // if (persistedData) {
//   //   persistedData = JSON.parse(persistedData);
//   // } else {
//   //   persistedData = {};
//   // }
//   persistedData[name] = value;
//   localStorApi.save(LOCAL_STORAGE_KEY, persistedData);
//   // localStorage.setItem('user-data', JSON.stringify(persistedData));
// };

// formRef.addEventListener('input', throttle(handleInput, 300));
// formRef.addEventListener('submit', handleSabmit);

// function initForm() {
//   // let persistedData = localStorage.getItem('user-data');
//   let persistedData = localStorApi.load(LOCAL_STORAGE_KEY);
//   if (persistedData) {
//     // persistedData = JSON.parse(persistedData);
//     // formRef.elements.name.value = persistedData.name;💩
//     // formRef.elements.email.value = persistedData.email;💩

//     // Object.keys(persistedData).forEach(key => {
//     //   console.log(key);
//     //   formRef.elements[key].value = persistedData[key];
//     // });
//     Object.entries(persistedData).forEach(([name, value]) => {
//       formRef.elements[name].value = value;
//     });
//   }
// }
