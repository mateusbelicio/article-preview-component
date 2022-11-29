'use strict';

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  if (button.dataset.active === 'true') {
    button.dataset.active = 'false';
  } else {
    button.dataset.active = 'true';
  }
});
