const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingradient => {
  const newEl = document.createElement('li');
  newEl.innerText = ingradient;
  newEl.classList.add('item');
  return newEl;
});

ingredientsEl.append(...elements);