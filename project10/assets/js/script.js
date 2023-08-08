const api_url = 'https://api.quotable.io/random';
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('newQuote');
const shareTwitter = document.getElementById('shareTwitter');

async function getquote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getquote(api_url);

newQuote.addEventListener('click', () => {
  getquote(api_url);
})

shareTwitter.addEventListener('click', () => {
  twitter(api_url);
})

function twitter() {
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML + '----- by ' + author.innerHTML}`,`Twitter Window`, `width=600, height=300`)
};