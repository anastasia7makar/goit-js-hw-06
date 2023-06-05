function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('#controls input');

function createBoxes(amount) {
  let size = 30;

  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    size += 10;
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    boxEl.append(divEl);
  }
  return boxEl;
}

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

function destroyBoxes() {
  boxEl.innerHTML = '';
}

destroyBtnEl.addEventListener('click', destroyBoxes);
