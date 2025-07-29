// Listas
const paises = [
    'Brasil', 'França','Peru','Chile','Argentina','Espanha','Inglaterra','Belgica','Italia', 'Alemanha'
]
const futebol = [
    'Bola','Goleiro','Atacante','Juiz','Gol','Drible','Neymar','Impedimento','Bicicleta','Vasco'
]
const filmes = [
    'Deadpool', 'Vingadores','Tarzan', 'Seven', 'Aliens','Coringa','Batman','Duna','it','Creed'
]
const mangas = [
    'Akira', 'Aoashi', 'Crows', 'Days','Dororo', 'Kaikisen', 'Rookies','Shigurui', 'Trigun', 'Jojo'
]

// variaveis
let icon = document.getElementById("icon")
let nameGame = document.querySelector(".game-name")
const inputsContainer = document.querySelector(".inputs")
const chute = document.querySelector(".line")
const button = document.querySelector(".button")

let palavrasPaises = paises;
let paisesRandom = palavrasPaises[Math.floor(Math.random() * palavrasPaises.length)].toUpperCase();

// funções 
chute.maxLength = 1;
const change = ()=>{
    nameGame.innerHTML = "Paises"
}

function mostrarCampo(){
    inputsContainer.innerHTML = "";
    for (let i = 0; i < paisesRandom.length; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("letter")
        input.disabled = true;
        inputsContainer.appendChild(input)
    }
}
// eventos
let tentativasErro = []
let acertos = 0

button.addEventListener('click',()=>{
    const letra = chute.value.toUpperCase()
    chute.value = "";

    let acertou = false
    [...paisesRandom].forEach((l,i) =>{
        if(l===letra){
            inputsContainer.children[i].value = letra
            acertos ++
            acertou = true
        }
    });

    if(!acertou && !tentativasErro.includes(letra)){
        tentativasErro.push(letra)
        document.getElementById("wrong").textContent = tentativasErro.join("");
    }
    if(acertos === paisesRandom.length){
        document.querySelector(".win").style.display = "block";
    }

    if(tentativasErro.length >= 6){
        document.querySelector(".lose").style.display = "block";
        document.querySelector(".lose span").textContent = paisesRandom
    }
})

window.addEventListener("DOMContentLoaded", () => {
    const modo = localStorage.getItem("modo");
    const imagem = localStorage.getItem("imagem");

    if (modo && imagem) {
        nameGame.innerHTML = modo;
        icon.src = imagem;

    
        localStorage.removeItem("modo");
        localStorage.removeItem("imagem");
    }
});

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        location.reload(); // recarrega a página e começa de novo
    });
});

mostrarCampo();