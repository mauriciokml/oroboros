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