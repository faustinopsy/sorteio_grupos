import { GRUPOS } from "./componentes/grupos.js";
import { MUSEUS } from "./componentes/museus.js";

const btn = document.getElementById("btn");
btn.addEventListener("click", sortear);

async function sortear() {
    const lista = document.getElementById("resultado");
    lista.innerHTML = "";
    for (const grupo of GRUPOS) {
        await esperar(1000);
        let museusSorteados = selecionarMuseus();
        const li = document.createElement("li");
        li.className = "bem-card bem-card--flat bem-p-sm bem-text-xs";
        li.innerHTML = `<b>${grupo}</b> : ${museusSorteados.join(", ")}`;
        lista.appendChild(li);
    }
    await sortearSobras();
}
function selecionarMuseus(){
    const museusSelecionados = [];
    while (museusSelecionados.length < 1) {
        const indiceAleatorio = Math.floor(Math.random() * MUSEUS.length);
        const museuSorteado = MUSEUS[indiceAleatorio];
              museusSelecionados.push(museuSorteado);
              MUSEUS.splice(indiceAleatorio, 1);
        
    }
    return museusSelecionados;
}

async function sortearSobras() {
    const listaSobras = document.getElementById("sobras");
    listaSobras.innerHTML = ""; 
    MUSEUS.forEach(museu => {
        const li = document.createElement("li");
        li.className = "bem-card bem-card--flat bem-p-sm bem-text-xs";
        li.textContent = museu;
        listaSobras.appendChild(li);
    });
    document.getElementById("btn").style.display = "none";
}

function esperar(tempo) {
  return new Promise(resolve => setTimeout(resolve, tempo));
}