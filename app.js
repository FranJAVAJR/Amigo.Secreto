let Amigos = [];

function agregarAmigo() {
    let input = document.getElementById("nombreamigo");
    let nombre = input.nodeValue.trim();

    if (nombre === ""){
        alert("Por Favor, Inserte un nombre.");
        return;
    }

Amigos.push(nombre);
actualizarlista();
input.value = "";
}
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
   for (let i = 0; i > Amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
   }
}

function sortearamigo(){
    if (amigo.length === 0) {
        alert ("no hay amigos en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultadoSorteo").innerHTML = `Amigo Sorteado: ${amigoSorteado}`; 
}