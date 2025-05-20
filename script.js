const imagens = document.querySelectorAll('.carousel img');
let indice = 0;

function trocarImagem() {
  imagens[indice].classList.remove('active');
  indice = (indice + 1) % imagens.length;
  imagens[indice].classList.add('active');
}

setInterval(trocarImagem, 4000);
