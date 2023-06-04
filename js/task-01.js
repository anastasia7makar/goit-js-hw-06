const categoriesEl = document.querySelector("#categories");

const getChildrenEl = categoriesEl.children;

console.log("Number of categories:", getChildrenEl.length);

const numberOfCategories = [...getChildrenEl].forEach((element) => {
  const nameCategory = element.children.item(0).textContent;
  console.log("Category: ", nameCategory);
  
  const quantityEl = element.children.item(1).children.length;
  console.log("Elements: ", quantityEl);
});
