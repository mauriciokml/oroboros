const links = document.querySelectorAll("ul a");

function ativarLink(link) {
const href = link.href;
const url = document.location.href;

if(href === url) {
    link.style.backgroundColor = "black";
    link.style.color = "white";
}
console.log(url)
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