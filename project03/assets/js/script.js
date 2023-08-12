const apiKey = '';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const weatherBox = document.querySelector('.weather');
const errorText = document.querySelector('.error');

async function checkWeather(city){
  const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);

  if(response.status == 404){
    errorText.classList.add('block');
    weatherBox.classList.remove('block');
  };

  const data = await response.json();

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}ºc`;
  document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
  document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;
  weatherIcon.src = `assets/images/${data.weather[0].main}.png`;

  weatherBox.classList.add('block');
}

searchBtn.addEventListener('click',() => {
  checkWeather(searchBox.value);
});