const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// // GET -> /contacts
// export const fetchContacts = () => {

//   return fetch(`${BASE_URL}/contacts`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   });
// };

// GET -> /contacts/:id
// export const getContact = id => {

//   return fetch(`${BASE_URL}/contacts/${id}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// };

// POST -> /contacts
// export const createContact = contact => {
//   return fetch(`${BASE_URL}/contacts`, {
//     method: 'POST',
//     body: JSON.stringify(contact),
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   });
// };

// PUT -> /contacts/:id
// export const updateContact = (id, contact) => {
//   return fetch(`${BASE_URL}/contacts/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify(contact),
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   });
// };

// DELETE /contacts/:id
// export const removeContact = id => {
//   return fetch(`${BASE_URL}/contacts/${id}`, {
//     method: 'DELETE',
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     return response.json();
//   });
// };
