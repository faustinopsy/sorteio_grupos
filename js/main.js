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


function mostrarGrupos() {
    const lista = document.getElementById("resultado");
    lista.innerHTML = "";
    GRUPOS.forEach(grupo => {
        const li = document.createElement("li");
        li.textContent = grupo;
        lista.appendChild(li);
    });
}
mostrarGrupos()