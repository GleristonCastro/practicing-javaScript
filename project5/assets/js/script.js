const workTitle = document.getElementById('work');
const breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let secounds = '00';

window.onload = () => {
  document.getElementById('minutes').innerHTML = workTime;
  document.getElementById('seconds').innerHTML = secounds;

  workTitle.classList.add('active');
}

function start(){
  document.getElementById('start').style.display = 'none';
  document.getElementById('reset').style.display = 'block';
  secounds = 59;

  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;

  breakCount = 0;

  let timerFunction = () => {
    document.getElementById('minutes').innerHTML = workMinutes;
    document.getElementById('seconds').innerHTML = secounds;

    secounds = secounds - 1;

    if(secounds === 0){
      workMinutes = workMinutes - 1;
      if(workMinutes === -1){
        if(breakCount %2 === 0){
          workMinutes = breakMinutes;
          breakCount ++;

          workTitle.classList.remove('.active');
          breakTitle.classList.add('.active');

        } else {
          workMinutes = workTime;
          breakCount ++;

          workTitle.classList.add('.active');
          breakTitle.classList.remove('.active');

        }
      }
      secounds = 59;
    }
  }

  setInterval(timerFunction, 1000);
}