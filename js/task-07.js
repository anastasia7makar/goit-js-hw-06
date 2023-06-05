const inputEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputEl.addEventListener('input', event => {
  let inputValue = inputEl.value;
  textEl.style.fontSize = `${inputValue}px`;
});
