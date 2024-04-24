const firstlist = document.querySelectorAll('LI:first-child');
const lastlist = document.querySelectorAll('LI:last-child');

firstlist.forEach((li) => (li.textContent = 'Primer'));
lastlist.forEach((li) => (li.textContent = 'Last list'));
