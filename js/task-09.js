function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const btnEl = bodyEl.querySelector('.change-color');
const colorEl = bodyEl.querySelector('.color');
btnEl.addEventListener('click', event => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorEl.innerHTML = randomColor;
});
