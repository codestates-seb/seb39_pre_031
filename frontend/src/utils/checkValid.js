export const checkValidForm = (
  email,
  password,
  emailErrorMessage,
  passwordErrorMessage
) => {
  let isValid = true;

  if (email.trim().length === 0) {
    emailErrorMessage('Email cannot be empty.');
    isValid = false;
  } else {
    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{3,}\.[a-zA-Z]{2,}$/g;
    if (!validEmail.test(email)) {
      emailErrorMessage('The email is not a valid email address.');
      isValid = false;
    }
  }

  if (password.trim().length === 0) {
    passwordErrorMessage('Password cannot be empty.');
    isValid = false;
  } else {
    const validPassword = /^(?=.*\d)[a-zA-Z0-9]{5,15}$/g;
    if (!validPassword.test(password)) {
      passwordErrorMessage(
        'The password must be at least 5 characters and contain at least 1 number and 1 letter.'
      );
      isValid = false;
    }
  }

  return isValid;
};
