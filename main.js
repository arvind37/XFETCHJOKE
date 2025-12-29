const buttonEle = document.querySelector('.fetch-btn');
const setupEle = document.querySelector('.joke-setup');
const punchlineEle = document.querySelector('.joke-puchline');
const tryEle = document.querySelector('.try-again');
const errorEle = document.querySelector('.error-text');

async function fetchAPI() {
  // RESET UI 
  errorEle.classList.add('hide');
  tryEle.classList.add('hide');
  setupEle.classList.remove('red');

  //LOADING STATE
  buttonEle.textContent = 'Fetching...';
  buttonEle.disabled = true;
  punchlineEle.classList.add('hide');

  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const res = await response.json();

    setupEle.textContent = res.setup;
    punchlineEle.textContent = res.punchline;
    punchlineEle.classList.remove('hide');
  } catch (error) {
    setupEle.textContent = 'Could not fetch a joke. Try again.';
    setupEle.classList.add('red');
    errorEle.classList.remove('hide');
    tryEle.classList.remove('hide');
  } finally {
    buttonEle.disabled = false;
    buttonEle.textContent = 'Fetch joke';
  }
}

buttonEle.addEventListener('click', fetchAPI);
tryEle.addEventListener('click', fetchAPI);
