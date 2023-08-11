const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const today = new Date();

const weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const allMonths = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December'];

date.innerText = (today.getDate()<10 ? '0' :'') + today.getDate();
day.innerText = weekDays[today.getDay()];
month.innerText = allMonths[today.getMonth()];
year.innerText = today.getFullYear();