// JS
const fruitList = ['poma', 'plàtan', 'tomàquet'];

const ul = document.querySelector('ul');

fruitList.forEach((fruit) => {
  const li = document.createElement('li');
  li.textContent = fruit;
  ul.appendChild(li);
});
