const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {

  const currentTime = new Date();

  hrs.innerText = currentTime.getHours() < 10 ? '0'+currentTime.getHours() : currentTime.getHours();
  min.innerText = currentTime.getMinutes() < 10 ? '0'+currentTime.getMinutes() : currentTime.getMinutes();
  sec.innerText = currentTime.getSeconds() < 10 ? '0'+currentTime.getSeconds() : currentTime.getSeconds();

}, 1000)