(function () {
  const usernameEl = document.querySelector('#username');
  const numberEl = document.querySelector('#number');
  const emailEl = document.querySelector('#email');

  const form = document.querySelector('#signup');

  const checkUsername = () => {

    let valid = false;
    const min = 3;
    const max = 25;
    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
      showError(usernameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
      showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    } else {
      showSuccess(usernameEl);
      valid = true;
    }
    return valid;
  }

  const checkNumber = () => {
    let valid = false;
    const number = numberEl.value.trim();

    if (!isRequired(number)) {
      showError(numberEl,'Number cannot be blank.');
    } else if (!isNumberValid(number)) {
      showError(numberEl, 'Number is not valid.')
    } else {
      showSuccess(numberEl);
      valid = true;
    }

    return valid
  }

  const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
      showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.')
    } else {
      showSuccess(emailEl);
      valid = true;
    }

    return valid;
  }

  const isNumberValid = (number) => {
    const re = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/;
    return re.test(number)
  }

  const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isRequired = value => value === '' ? false : true;
  const isBetween = (length, min, max) => length < min || length > max ? false : true;

  const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
  };

  const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isNumberValid = checkNumber();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isNumberValid;

    if (isFormValid) {
    //  !!!  Отправка данных на сервер  !!!
    }
  });

  const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn.apply(null, args)
      }, delay);
    };
  };

  form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
      case 'username':
        checkUsername();
        break
      case 'number':
        checkNumber();
        break
      case 'email':
        checkEmail();
        break
    }
  }))
})();
