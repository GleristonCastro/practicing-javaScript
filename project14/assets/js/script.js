const displayTime = document.getElementById('displayTime');
const btnWhatchStart = document.getElementById('btnWhatchStart');
const btnWhatchStop = document.getElementById('btnWhatchStop');
const btnWhatchReset = document.getElementById('btnWhatchReset');

let [seconds, minutes, hours] = [0,0,0];
let timer = null;

function stopwatch(){
  seconds++
  if(seconds == 60){
    seconds = 0;
    minutes++;
    if(minutes == 60){
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  displayTime.innerHTML = `${h}:${m}:${s}`;
}

function whatchStart(){
  if(timer!== null){
    clearInterval(timer);
  }
  timer = setInterval(stopwatch,1000);
}

btnWhatchStart.addEventListener('click', whatchStart);

function whatchStop(){
  clearInterval(timer);
}

btnWhatchStop.addEventListener('click', whatchStop);

function whatchReset(){
  clearInterval(timer);
  [seconds, minutes, hours] = [0,0,0];
  displayTime.innerHTML = '00:00:00';
}

btnWhatchReset.addEventListener('click', whatchReset);

