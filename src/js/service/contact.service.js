// import axios from 'axios';

// axios.defaults.baseURL = 'https://6251bfb67f7fa1b1ddde85d8.mockapi.io/api';
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = () => {
  // const { data } = await axios.get('/contacts');
  // return data;

  return fetch(`${BASE_URL}/contacts`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

// GET -> /contacts/:id
export const getContactById = id => {
  //  const { data } = await axios.get(`/contacts/${id}`);
  // return data;

  return fetch(`${BASE_URL}/contacts/${id}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

// POST -> /contacts
export const createContact = contact => {
  //  const { data } = await axios.post('/contacts', contact);
  // return data;

  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(`${BASE_URL}/contacts`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

// PUT -> /contacts/:id
export const updateContact = newContact => {
  //  const { data } = await axios.put(`/contacts/${id}`, contact);
  // return data;

  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(`${BASE_URL}/contacts/${newContact.id}`, options).then(
    response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
};

// PATCH -> /contacts/:id
// export const updateContactPATCH = newContact => {
//   const options = {
//     method: 'PATCH',
//     body: JSON.stringify(newContact),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

//   return fetch(`${BASE_URL}/contacts/${newContact.id}`, options).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     }
//   );
// };

// DELETE -> /contacts/:id
export const deleteContact = id => {
  // const { data } = await axios.delete(`/contacts/${id}`);
  // return data;

  const options = {
    method: 'DELETE',
  };
  return fetch(`${BASE_URL}/contacts/${id}`, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
