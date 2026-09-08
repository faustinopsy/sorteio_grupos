const GRUPOS = [
      "Arachnix", 
      "Capsa Tech", 
      "Code.X", 
      "DualCore", 
      "JIF Tech", 
      "New Leaf Technology", 
      "PinacoTech", 
      "Vértice", 
      "WizTech Secret"
    ];

const MUSEUS = [
      "MAC-USP", 
      "Memorial da Resistência", 
      "CCBB SP", 
      "Casa das Rosas", 
      "Pinacoteca", 
      "Museu do Futebol", 
      "Museu da Língua Portuguesa", 
      "Museu Afro Brasil", 
      "Museu da Imigração", 
      "Museu de Zoologia USP", 
      "IMS Paulista", 
      "Itaú Cultural", 
      "Japan House", 
      "Museu das Favelas", 
      "CAIXA Cultural"
    ];

async function sortear() {
    const lista = document.getElementById("resultado");
    lista.innerHTML = "";
    for (const grupo of GRUPOS) {
        await esperar(1000);
        museusSorteados = selecionarMuseus();
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