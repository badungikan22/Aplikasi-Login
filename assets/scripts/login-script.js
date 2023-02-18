/** @module Login-Script */
/**
*@constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
*@constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
*@constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
*@constant {string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
*@constant {string}
*/
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  
  /**
*@constant {string}
*/
  const email = inputEmailElement.value;
  
  /**
*@constant {string}
*/
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
