const character = document.getElementById('character');
const block = document.getElementById('block');
const message = document.getElementById('message');
const buttons = document.getElementById('buttons');
const start = document.getElementById('start');

start.addEventListener('click', startGame);

function startGame (){
  character.classList.remove('none');
  block.classList.remove('none');
  message.classList.remove('block');
  buttons.classList.remove('block');
};

function jumpOnEvent() {
  jump();
};

document.documentElement.addEventListener('click', jumpOnEvent);
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    jumpOnEvent();
  }
});


function jump() {
  if (character.classList != 'animate') {
    character.classList.add('animate');
  }
  setTimeout(function () {
    character.classList.remove('animate');
  }, 500);
};

const checkDead = setInterval(function(){
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    character.classList.add('none');
    block.classList.add('none');
    message.classList.add('block');
    message.innerText = 'You Lose.';
    buttons.classList.add('block');
  }
});