// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
const href = link.href;
const url = location.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
        }

}
links.forEach(ativarLink);


// Ativar Itens do Orçamento

const parametros = new URLSearchParams(location.search);


function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}


parametros.forEach(ativarProduto);



// Galeria de Produtos

const galeria = document.querySelectorAll('.produto-imagens img');
const galeriaContainer = document.querySelector(".produto-imagens");

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);