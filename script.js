const api = "https://api.quotable.io/random";
const quote = document.getElementById('quote');
const author = document.getElementById("author");
const btn = document.getElementById("btn");

// Adding an Event listner for button
btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `-${data.author}`;
    })
    .catch((err) => {
      console.error('Error: ', err)
    });
}

const whatsappBtn = document.getElementById('whatsapp-share-button');
whatsappBtn.addEventListener('click', () => {
  const quote = document.getElementById('quote').textContent;
  const author = document.getElementById('author').textContent;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${quote} - ${author}`)}`;
  window.open(whatsappUrl, '_blank');
});