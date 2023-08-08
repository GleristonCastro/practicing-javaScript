const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const buttonClick = document.querySelector('.row button');

const addTask = () => {
  if (inputBox.value === '') {
    alert('You must write something!');
  } else {
    let li = document.createElement('li');
    li.innerText = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerText = '\u00d7'
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData()
}

buttonClick.addEventListener('click', addTask);

listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData()
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData()
  }
}, false);

const saveData = () => {
  localStorage.setItem('data', listContainer.innerHTML);
}

(function () {
  listContainer.innerHTML = localStorage.getItem('data');
})();