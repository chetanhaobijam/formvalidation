// store signup form element reference and add submit event listener
const signupForm = document.querySelector('form');
signupForm.addEventListener('submit', handleSignupFormSubmit);

/**
* callback function for signup form submit event listener
*/
function handleSignupFormSubmit(e) {
  // prevent default browser behaviour
  e.preventDefault();

  const formDataEntries = new FormData(signupForm).entries();
  const { email, password } = Object.fromEntries(formDataEntries);

  const emailErrorMessage = validateEmail(email);
  const passowrdErrorMessage = validatePassword(password);

  if (emailErrorMessage) {
    // select the email form field message element
    const emailErrorMessageElement = document.querySelector('.errormessage1');
    // show email error message to user
    emailErrorMessageElement.innerText = emailErrorMessage;
  }

  if (passowrdErrorMessage) {
    // select the email form field message element
    const passwordErrorMessageElement = document.querySelector('.errormessage2');
    // show password error message to user
    passwordErrorMessageElement.innerText = passowrdErrorMessage;
  }
}

/**
* validate email
*/
function validateEmail(email) {
  if (!email) return 'Email is required';
  
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const isValidEmail = /^\S+@\S+$/g
  if (!isValidEmail.test(email)) {
    return 'Please enter a valid email';
  }

  return '';
}

/**
* validate passowrd
*/
function validatePassword(password, minlength) {
  if (!password) return 'Password is required';

  if (password.length < minlength) {
    return `Please enter a password that's at least ${minlength} characters long`;
  }

  const hasCapitalLetter = /[A-Z]/g;
  if (!hasCapitalLetter.test(password)) {
    return 'Please use at least one capital letter.';
  }

  const hasNumber = /\d/g;
  if (!hasNumber.test(password)) {
    return 'Please use at least one number.';
  }

  return '';
}