const showSocial = (toggleCard, socialCard) => {
  const toggle = document.getElementById(toggleCard);
  const social = document.getElementById(socialCard);

  toggle.addEventListener('click', () => {
    social.classList.toggle('animation');
  })
}

showSocial('card-toggle', 'card-social');