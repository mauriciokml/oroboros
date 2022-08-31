const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
const href = link.href;
const url = location.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
        }

}
links.forEach(ativarLink);


const imagens = document.querySelectorAll('#galeria-mel img');

function galeriaTrocar(event) {
    const principal = document.querySelector("#imagem-mel-principal");
    const clicada = event.currentTarget;
    principal.src = clicada.src;
    principal.alt = clicada.alt;
}

function galeriaClick(imagem) {
    imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClick);