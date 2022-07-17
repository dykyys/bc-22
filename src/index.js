import 'material-icons/iconfont/material-icons.css';
// import { formatDistance } from 'date-fns';

// import * as ContactsService from './js/service/contact.service';
// const listRef = document.querySelector('.contacts-container');

// GET -> /contacts
// ContactsService.fetchContacts()
//   .then(contacts => {
//     const m = createListcontacts(contacts);
//     listRef.innerHTML = m.join('');
//   })
//   .catch(error => console.error(error.message));

// GET -> /contacts/:id
// ContactsService.getContact(26)
//   .then(contact => console.log(contact))
//   .catch(error => console.error(error.message));

// POST -> /contacts
// const newContact = {
//   name: 'Ellie',
//   email: 'Ellie@mail.com',
//   number: '655-496-6787',
// };

// ContactsService.createContact(newContact)
//   .then(contact => console.log(contact))
//   .catch(error => console.error(error.message));

// PUT -> /contacts/:id
// const updatedContact = {
//   name: 'Kylie Miller',
// };

// ContactsService.updateContact(6, updatedContact)
//   .then(contact => console.log(contact))
//   .catch(error => console.error(error.message));

// DELETE /contacts/:id

// ContactsService.removeContact(6)
//   .then(contact => console.log(contact))
//   .catch(error => console.error(error.message));

// const arrId = [9, 10, 11];
// const promises = arrId.map(id => ContactsService.removeContact(id));

// Promise.all(promises)
//   .then(data => data.forEach(res => console.log(res)))
//   .catch(err => console.error(err));

// Promise.all([
//   ContactsService.removeContact(13),
//   ContactsService.removeContact(14),
// ])
//   .then(data => data.forEach(res => console.log(res)))
//   .catch(err => console.error(err));

// function createListcontacts(contacts) {
//   return contacts.map(({ name, phone, email, id, createdAt }) => {
//     return `<div class="col-md-6">
//       <div class="card mb-2 shadow">
//         <div class="d-flex justify-content-between pb-3 border-bottom">
//           <div class="d-flex flex-row align-items-center gap-1">
//             <div class="icon">
//                <span class="material-icons-outlined"> contacts </span>
//             </div>
//             <div class="ms-2 c-details">
//               <h2 class="h5 mb-0 fw-bold">${id} - ${name}</h2>
//               <span>${form(createdAt)}</span>
//             </div>
//           </div>
//           <button type="button" class="btn-close" aria-label="Close"></button>
//         </div>
//         <div class="mt-2">
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item d">
//               <a
//                 href="tel:+"
//                 class="d-flex align-items-center text-secondary text-decoration-none nav-link"
//                 ><span class="material-icons-round me-2"> phone </span> ${phone}</a
//               >
//             </li>
//             <li class="list-group-item">
//               <a
//                 href="mailto:"
//                 class="d-flex align-items-center text-secondary text-decoration-none nav-link"
//                 ><span class="material-icons-round me-2">
//                   alternate_email
//                 </span>
//                 ${email}</a
//               >
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>`;
//   });
// }

// function form(data) {
//   return formatDistance(new Date(), new Date(data), {
//     addSuffix: true,
//   });
// }
