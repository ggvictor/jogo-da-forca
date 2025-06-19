// variaveis
let icon = document.getElementById("icon")
let nameGame = document.querySelector(".game-name")
// funções 
const change = ()=>{
    nameGame.innerHTML = "Paises"
}
// eventos


window.addEventListener("DOMContentLoaded", () => {
    const modo1 = localStorage.getItem("modo1")
    const imagem1 = localStorage.getItem("imagem1")

    if (modo1 && nameGame) {
        nameGame.innerHTML = modo1
    }
    if(imagem1 && icon){
        icon.src = imagem1
    }

    const modo2 = localStorage.getItem("modo2")
    const imagem2 = localStorage.getItem(imagem2)

    if(modo2 && nameGame){
        nameGame.innerHTML = modo2
    }
})