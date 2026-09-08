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

function mostrarGrupos() {
    const lista = document.getElementById("resultado");
    lista.innerHTML = "";
    GRUPOS.forEach(grupo => {
        museusSorteados = MUSEUS.sort(() => Math.random() - 0.5).slice(0, 2);
        const li = document.createElement("li");
        li.className = "bem-card bem-card--flat bem-p-sm bem-text-xs";
        li.innerHTML = `<b>${grupo}</b> : ${museusSorteados.join(", ")}`;
        lista.appendChild(li);
    });
       
}
mostrarGrupos()