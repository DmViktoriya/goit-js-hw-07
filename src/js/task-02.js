const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients');
const ingredientEl = ingredients.map(option => {
  const ingredientLi = document.createElement('li');

  ingredientLi.innerHTML = `<p>${option}</p>`;

  console.log(ingredientLi);
  return ingredientLi;
});

ingredientsEl.append(...ingredientEl);
















//  const ingredientsList = document.querySelector('#ingredients');
//  const ingredientsEl = ingredients.map(option => {
//    const ingredientsListElement = document.createElement('li');
//    ingredientsListElement.textContent = option;
//    console.log(ingredientsListElement);
//    return ingredientsListElement;
// })

// ingredientsList.append(...ingredientsEl);