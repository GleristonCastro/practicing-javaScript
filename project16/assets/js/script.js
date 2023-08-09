const btnSubmit = document.getElementById('btnSubmit');
const bntclosePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');

function openPopup(){
  popup.classList.add('open-popup');
}
btnSubmit.addEventListener('click', openPopup);

function closePopup(){
  popup.classList.remove('open-popup');
}
bntclosePopup.addEventListener('click', closePopup);