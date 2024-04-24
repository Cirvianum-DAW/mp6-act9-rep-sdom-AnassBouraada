const div = document.querySelector('#list-app');

const list = document.createElement('ul');
div.appendChild(list);
const inputText = document.createElement('input');
inputText.type = 'text';
const botoAfegir = document.createElement('button');
botoAfegir.innerHTML = 'New Item';

div.appendChild(inputText);
div.appendChild(botoAfegir);

botoAfegir.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerHTML = inputText.value;
  list.appendChild(li);
  inputText.value = '';
});

list.addEventListener('click', () => {
  console.dir(event);
  if (event.target.tagName === 'LI') {
    const text = prompt('introdueix el nou text');
    event.target.innerHTML = text;
  }
});
