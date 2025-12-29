   
   const buttonEle = document.querySelector('.fetch-btn');
   const setupEle = document.querySelector('.joke-setup');
   const puchlineEle = document.querySelector('.joke-puchline');
   const tryEle = document.querySelector('.try-again');


   async function fetchAPI() {
      try {
        setupEle.innerHTML = 'Fetching...'
        puchlineEle.classList.add('hide');
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const text = await response.text();
        const res = JSON.parse(text);
        console.log(res);

        puchlineEle.classList.remove('hide');
        setupEle.innerHTML = res.setup;
        puchlineEle.innerHTML = res.punchline;
      } catch(error) {
        setupEle.classList.add('red');
        tryEle.classList.remove('hide');
        setupEle.innerHTML = 'Could not fetch a joke. Try again.'
      }

    }

    buttonEle.addEventListener('click', fetchAPI);
    tryEle.addEventListener('click', fetchAPI);