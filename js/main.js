// variaveis
let icon = document.getElementById("icon")
let nameGame = document.querySelector(".game-name")
const input = document.querySelectorAll(".letter")

for(let linha of input){
    linha.maxLength = 1;
}
// funções 
const change = ()=>{
    nameGame.innerHTML = "Paises"
}
// eventos


window.addEventListener("DOMContentLoaded", () => {
    const modo = localStorage.getItem("modo");
    const imagem = localStorage.getItem("imagem");

    if (modo && imagem) {
        nameGame.innerHTML = modo;
        icon.src = imagem;

        // limpa os dados após usar (opcional, mas ajuda a evitar conflitos)
        localStorage.removeItem("modo");
        localStorage.removeItem("imagem");
    }
});