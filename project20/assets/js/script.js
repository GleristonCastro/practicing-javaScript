const password = document.getElementById('password');
const message = document.getElementById('message');
const strenght = document.getElementById('strenght');

password.addEventListener('input', () => {
  if(password.value.length > 0){
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }

  if(password.value.length < 4){
    strenght.innerText = 'weak'
    password.style.borderColor = '#ff5925';
    message.style.color = '#ff5925'
  } else if (password.value.length >= 4 && password.value.length < 8){
    strenght.innerText = 'medium';
    password.style.borderColor = '#f0ff25';
    message.style.color = '#f0ff25'
  } else if (password.value.length > 8){
    strenght.innerText = 'strong';
    password.style.borderColor = '#58ff25';
    message.style.color = '#58ff25'
  }
});