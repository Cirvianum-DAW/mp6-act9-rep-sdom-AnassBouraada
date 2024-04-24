var languages = [
  {
    name: 'JavaScript',
    releaseDate: 1995,
    fileExtension: '.js',
    creator: 'Brendan Eich',
  },
  {
    name: 'Java',
    releaseDate: 1995,
    fileExtension: '.java',
    creator: 'James Gosling',
  },
  {
    name: 'PHP',
    releaseDate: 1995,
    fileExtension: '.php',
    creator: 'Rasmus Lerdorf',
  },
  {
    name: 'C++',
    releaseDate: 1985,
    fileExtension: '.cpp',
    creator: 'Bjarne Stroustrup',
  },
];

function tableCreator(dataArray, targetElement) {
  // Crea els elements de la taula
  const table = document.createElement('table');

  const theadElement = document.createElement('thead');
  table.appendChild(theadElement);

  const trElement = document.createElement('tr');
  for (const key in dataArray[0]) {
    const thElement = document.createElement('th');
    thElement.innerHTML = key;
    trElement.appendChild(thElement);
  }

  theadElement.appendChild(trElement);

  targetElement.appendChild(table);
}

// Crida a la funció
tableCreator(languages, document.getElementById('table-container'));
