//https://ru.wikipedia.org/wiki/UTF-8#:~:text=Unicode%20Transformation%20Format%2C%208%2Dbit,%D1%81%207%2D%D0%B1%D0%B8%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%BE%D0%B9%20ASCII.
//https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_MIME-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2

import 'material-icons/iconfont/material-icons.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRefs } from './js/getRers';
// import {
//   getContacts,
//   getContactById,
//   createContact,
//   updateContact,
//   updateContactPATCH,
//   deleteContact,
// } from './js/service/contact.service';
import * as ContactsAPI from './js/service/contact.service';
import { createListContacts } from './templates/createListContacts';
import { createCardcontact } from './templates/createCardcontact';

const refs = getRefs();

//=========================
// GET -> /contacts
// getContacts()
//   .then(data => {
//     const markup = createListcontacts(data);
//     listRef.innerHTML = markup.join('');
//   })
//   .catch(error => console.log(error));
//=========================
// GET -> /contacts/:id
// getContactById(15)
//   .then(data => {
//     const markup = createCardcontact(data);
//     listRef.innerHTML = markup;
//   })
//   .catch(error => console.log(error));
//=========================
// POST -> /contacts
// const mango = {
//   name: 'Mango',
//   email: 'mango@gmail.com',
//   phone: '55555555',
// };
//  createContact(mango).then(data => {
//    Notify.success(`${data.name} created!!!`);
//  });
//=========================
//PUT -> /contacts/:id
// const newContact = {
//   name: 'Mango people net',
//   phone: '05000000000',
//   email: 'mangoPeopleNet@gmail.com',
// };
// updateContact(55, newContact)
//   .then(({ name }) => {
//     Notify.success(`${name} was updated!!!`);
//   })
//   .catch(error => console.log(error));

ContactsAPI.getContacts()
  .then(data => {
    const markup = createListContacts([...data].reverse());
    refs.list.innerHTML = markup.join('');
    // Notify.success(`All contacts update!!!`);
  })
  .catch(error => console.log(error));

// const newContact = {
//   id: 51,
//   name: 'Poly',
// };

// refs.update.addEventListener('click', () => {
//   ContactsAPI.updateContact(newContact)
//     .then(({ name }) => {
//       Notify.success(`${name} was updated!!!`);
//     })
//     .catch(error => console.log(error));
// });

// refs.delete.addEventListener('click', () => {
//   console.log('del');
//   ContactsAPI.deleteContact(52)
//     .then(({ name }) => {
//       Notify.info(`${name} was deleted`);
//     })
//     .catch(error => {
//       Notify.failure('Something wrong!');
//     });
// });

refs.list.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;
  const card = event.target.closest('.js-contact-card');
  console.log(card);
  card.remove();

  ContactsAPI.deleteContact(card.dataset.id)
    .then(({ name }) => {
      Notify.info(`${name} was deleted`, { position: 'left-top' });
    })
    .catch(error => {
      Notify.failure('Something wrong!', { position: 'left-top' });
    });
});

// const arrId = [13, 12, 11, 10, 9];
// const promises = arrId.map(id => ContactsAPI.deleteContact(id));

// // console.log(promises);

// Promise.all(promises)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));
