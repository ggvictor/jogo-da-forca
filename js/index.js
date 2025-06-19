// variaveis
const buttons = document.querySelectorAll(".button")
const paises = document.querySelector("#paises")
const futebol = document.querySelector("#futebol")

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
    localStorage.setItem("modo1", "paises")
    localStorage.setItem("imagem1", "img/paises.png")
    window.location.href = "game.html"
})

futebol.addEventListener('click', () => {
    localStorage.setItem("modo2", "futebol")
    localStorage.setItem("imagem2", "img/futebol.png")
    window.location.href = "game.html"
})

