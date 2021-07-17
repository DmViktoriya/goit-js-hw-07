const linkEl = document.querySelector('.item'); //элемент с названием
const linkEls = document.querySelectorAll('.item'); //все названия
const linksEl = linkEl.querySelectorAll('li'); // первый блок
const El = linkEls[1].querySelectorAll('li'); //второй блок
const Ell = linkEls[2].querySelectorAll('li'); //третий блок


console.log(`В списке ${linkEls.length} категории`);

console.log(`Категория: ${linkEl.children[0].textContent}`);
console.log(`Количество элементов: ${linksEl.length}`);

console.log(`Категория: ${linkEls[1].children[0].textContent}`);
console.log(`Количество элементов: ${El.length}`);

console.log(`Категория: ${linkEls[2].children[0].textContent}`);
console.log(`Количество элементов: ${Ell.length}`);

