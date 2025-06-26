// variaveis
const buttons = document.querySelectorAll(".button")
const paises = document.querySelector("#paises")
const futebol = document.querySelector("#futebol")
const filmes = document.querySelector("#filmes")
const mangas = document.querySelector("#mangas")

// funções
function delay(){
    setTimeout(() => {
        window.location.href = "game.html";
    }, 1000);
}

// eventos

buttons.forEach(button => {
    button.addEventListener('click', () => {
        delay();
    });
});

paises.addEventListener('click', () => {
    localStorage.setItem("modo", "Paises")
    localStorage.setItem("imagem", "img/paises.png")
    window.location.href = "game.html"
})

futebol.addEventListener('click', () => {
    localStorage.setItem("modo", "Futebol")
    localStorage.setItem("imagem", "img/futebol.png")
    window.location.href = "game.html"
})
filmes.addEventListener('click', () => {
    localStorage.setItem("modo", "Filmes")
    localStorage.setItem("imagem", "img/filmes.png")
    window.location.href = "game.html"
})
mangas.addEventListener('click', () => {
    localStorage.setItem("modo", "Mangas")
    localStorage.setItem("imagem", "img/mangas.png")
    window.location.href = "game.html"
})
