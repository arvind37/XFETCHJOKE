   
   const buttonEle = document.querySelector('.fetch-btn');
   const setupEle = document.querySelector('.joke-setup');
   const puchlineEle = document.querySelector('.joke-puchline');
   const tryEle = document.querySelector('.try-again');
   const errorEle = document.querySelector('.error-text');

   async function fetchAPI() {
      try {
        setupEle.innerHTML = 'Fetching...'
        puchlineEle.classList.add('hide');
        buttonEle.disabled = true;
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const text = await response.text();
        const res = JSON.parse(text);
        console.log(res);
        buttonEle.disabled = false;
        puchlineEle.classList.remove('hide');
        setupEle.innerHTML = res.setup;
        puchlineEle.innerHTML = res.punchline;
      } catch(error) {
        setupEle.classList.add('red');
        tryEle.classList.remove('hide');
        errorEle.classList.remove('hide');
        buttonEle.disabled = false;
      }

    }

    buttonEle.addEventListener('click', fetchAPI);
    tryEle.addEventListener('click', fetchAPI);