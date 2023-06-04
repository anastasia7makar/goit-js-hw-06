const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.forEach((ingradient) => {
  const newEl = document.createElement("li");
  newEl.innerText = ingradient;
  newEl.classList.add("item");
  ingredientsEl.append(newEl);
});
