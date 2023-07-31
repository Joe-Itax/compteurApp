const compteur = document.getElementById('compteur');
const btnRemove = document.getElementById('btn-remove');
const btnAdd = document.getElementById('btn-add');
const buttonReset = document.getElementById('btn-reset');
let i = 0;
function add() {
  i++;
  compteur.innerText = i;
}

function remove() {
  if (i > 0) {
    i--;
    compteur.innerText = i;
  }
}

function reset() {
  i = 0;
  compteur.innerText = i;
}

btnAdd.addEventListener('click', add);
btnRemove.addEventListener('click', remove);
buttonReset.addEventListener('click', reset);
