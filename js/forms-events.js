'use strict';
/*
 *Події елементів форм. focus, blur, change, input, submit
 */

const formSubmitRef = document.querySelector('.js-contact-form');
const formBtnRef = formSubmitRef.querySelector('.js-contact-form-submit');
const formUserNameRef = formSubmitRef.querySelector('.js-username-input');
const handleSubmit = event => {
  event.preventDefault();

  const {
    elements: { username },
  } = event.currentTarget;

  console.log(username.value);

  console.log('submit');
};

const handleChange = event => {
  const {
    elements: { username, accept },
  } = event.currentTarget;

  if (accept.checked && username.value) {
    formBtnRef.disabled = false;
  }
};

formSubmitRef.addEventListener('submit', handleSubmit);
formSubmitRef.addEventListener('change', handleChange);

// console.log(formUserNameRef);

formUserNameRef.addEventListener('focus', event => {
  //   console.log(event.currentTarget);
  event.currentTarget.style.outline = '3px solid blue';
});
formUserNameRef.addEventListener('blur', event => {
  const { value, dataset } = event.currentTarget;
  if (value.length !== Number(dataset.length)) {
    event.currentTarget.style.outline = '3px solid red';
    // event.currentTarget.classList.add('invalid');
    // event.currentTarget.classList.remove('valid');
    // event.currentTarget.className = 'invalid';
    return;
  }
  //   event.currentTarget.className = 'valid';
  //   event.currentTarget.classList.add('valid');
  //   event.currentTarget.classList.remove('invalid');
  event.currentTarget.style.outline = '3px solid lime';
  //   event.currentTarget.style.outline = 'none';
});
