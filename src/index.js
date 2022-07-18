import 'material-icons/iconfont/material-icons.css';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRefs } from './js/getRers';

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
//***************** */

// const getContacts = async () => {
//   try {
//     const data = await ContactsAPI.getContacts();
//     const markup = createListContacts([...data].reverse());
//     refs.list.innerHTML = markup.join('');
//   } catch (error) {
//     console.log(error);
//   }
// };

ContactsAPI.getContacts()
  .then(data => {
    const markup = createListContacts([...data].reverse());
    refs.list.innerHTML = markup.join('');
    // Notify.success(`All contacts update!!!`);
  })
  .catch(error => console.log(error));
/******************* */

// document.addEventListener('DOMContentLoaded', getContacts);

// .then(data => {
//   const markup = createListContacts([...data].reverse());
//   refs.list.innerHTML = markup.join('');
//   // Notify.success(`All contacts update!!!`);
// })
// .catch(error => console.log(error));

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

  card.remove();

  ContactsAPI.deleteContact(card.dataset.id)
    .then(({ name }) => {
      Notify.info(`${name} was deleted`, { position: 'left-top' });
    })
    .catch(error => {
      Notify.failure('Something wrong!', { position: 'left-top' });
    });
});

const handleSearchInput = async event => {
  const searchValue = event.target.value.trim().toLowerCase();

  const data = await ContactsAPI.getContacts();

  const filteredContacts = data.filter(({ name }) => {
    return name.toLowerCase().includes(searchValue);
  });

  refs.list.innerHTML = '';

  const markup = createListContacts(filteredContacts);
  refs.list.innerHTML = markup.join('');
};

refs.searchForm.addEventListener('input', throttle(handleSearchInput, 300));
