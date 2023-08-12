const passwordBox = document.getElementById('password');
const createPasswordBtn = document.getElementById('createPassword');
const copyPasswordBtn = document.getElementById('copyPassword');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^¨&*()_+~|{}[]<>/-="';
const allChars = upperCase + lowerCase + number + symbol;

createPasswordBtn.addEventListener('click', createPassword);

function createPassword(){
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

copyPasswordBtn.addEventListener('click', copyPassword);

function copyPassword(){
  let forCopy = passwordBox.value;
  navigator.clipboard.writeText(forCopy);
  passwordBox.value = 'copied to clipboard'
}