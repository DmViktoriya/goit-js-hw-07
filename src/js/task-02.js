const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



 const ingredientsList = document.querySelector('#ingredients');
 const ingredientsEl = ingredients.map(option => {
   const ingredientsListElement = document.createElement('li');
   ingredientsListElement.textContent = option;
   console.log(ingredientsListElement);
   return ingredientsListElement;
})

ingredientsList.append(...ingredientsEl);